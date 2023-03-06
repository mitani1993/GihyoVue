<script setup lang="ts">
import { ref } from "vue";

const coctailListInit = new Map<number, string>();
coctailListInit.set(2345, "ホワイトレディ");
coctailListInit.set(4412, "ブルーハワイ");
coctailListInit.set(6792, "ニューヨーク");
const coctailList = ref(coctailListInit);
</script>

<template>
  <ul>
    <li
      v-for="[id, coctailName] in coctailList"
      v-bind:key="id">
      IDが{{ id }}のカクテルは{{ coctailName }}
    </li>
  </ul>
</template>
