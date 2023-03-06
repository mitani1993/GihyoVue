<script setup lang="ts">
import { ref } from "vue";

const coctailListInit: {[key: number]: string} = {
  2345: "ホワイトレディ",
  4412: "ブルーハワイ",
  6792: "ニューヨーク"
};
const coctailList = ref(coctailListInit);
</script>

<template>
  <ul>
    <li
      v-for="(coctailName, id) in coctailList"
      v-bind:key="'coctailList' + id">
      IDが{{ id }}のカクテルは{{ coctailName }}
    </li>
  </ul>
  <ul>
    <li
      v-for="(coctailName, id, index) in coctailList"
      v-bind:key="'coctailListWithIdx' + id">
      {{ index + 1 }}: IDが{{ id }}のカクテルは{{ coctailName }}
    </li>
  </ul>
</template>
