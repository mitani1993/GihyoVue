<script setup lang="ts">
import { ref } from "vue";

const cocktailListInit: string[] = ["ホワイトレディ", "ブルーハワイ", "ニューヨーク"];
const coctailList = ref(cocktailListInit);
</script>

<template>
  <ul>
    <li
      v-for="coctailName in coctailList"
      v-bind:key="coctailName">
      {{ coctailName }}
    </li>
  </ul>
  <ul>
    <li
      v-for="(coctailName, index) in coctailList"
      v-bind:key="coctailName">
      {{ coctailName }}(インデックス{{ index }})
    </li>
  </ul>
</template>
