import { defineStore } from "pinia"
import type { Member } from "@/interfaces"

interface State {
  memberList: Map<number, Member>;
}

async function getDatabase(): Promise<IDBDatabase> {
  const promise = new Promise<IDBDatabase>(
    (resolve, reject): void => {
      const request = window.indexedDB.open("asyncdb", 1);
      request.onsuccess = (event) => {
        const target = event.target as IDBRequest;
        const _database = target.result as IDBDatabase;
        resolve(_database);
      };
      request.onerror = (event) => {
        console.log("ERROR: DBをオープンできません。", event);
        reject(new Error("ERROR: DBをオープンできません。"));
      };
    }
  );
  return promise;
}

export const useMemberStore = defineStore({
  id: "member",
  state: (): State => {
    return {
      memberList: new Map<number, Member>()
    };
  },
  getters: {
    getById: (state) => {
      return (id: number): Member => {
        const member = state.memberList.get(id) as Member;
        return member;
      }
    },
    isMemberListEmpty: (state): boolean => {
      return state.memberList.size == 0;
    }
  },
  actions: {
    prepareMemberList(): void {
      // 空のmemberListを用意。
      let memberList = new Map<number, Member>();
      // セッションストレージからデータを取得。
      const memberListJSONStr = sessionStorage.getItem("memberList");
      // セッションストレージのデータが空でないなら
      if (memberListJSONStr != undefined) {
        // JSON文字列をJSONオブジェクトに変換。
        const memberListJSON = JSON.parse(memberListJSONStr);
        // JSONオブジェクトを元にmemberListを生成。
        memberList = new Map<number, Member>(memberListJSON);
      }
      // ステートにmemberListを格納。
      this.memberList = memberList;
    },
    insertMember(member: Member): void {
      // ステートのmemberListに引数の会員情報を追加。
      this.memberList.set(member.id, member);
      // ステートのmemberListをJSON文字列に変換。
      const memberListJSONStr = JSON.stringify([...this.memberList]);
      // セッションストレージに格納。
      sessionStorage.setItem("memberList", memberListJSONStr);
    }
  }
});
