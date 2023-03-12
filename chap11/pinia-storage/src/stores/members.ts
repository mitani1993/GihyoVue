import { defineStore } from "pinia"
import type { Member } from "@/interfaces"

interface State {
  memberList: Map<number, Member>;
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
    }
  }
});
