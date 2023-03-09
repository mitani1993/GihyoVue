<script setup lang="ts">
import { ref } from "vue";
import OneSection from "./components/OneSection.vue";

const taroProblemsInt: string[] = ["電話が通じません。", "留守です。"];
const taro = ref("田中太郎");
const taroProblems = ref(taroProblemsInt);
const jiro = ref("鈴木二郎");
</script>

<template>
  <section>
    <OneSection v-bind:name="taro">
      <template v-slot:default>
        <p>問題発生</p>
      </template>
      <template v-slot:detail>
        <li v-for="problem in taroProblems" v-bind:key="problem">
          {{ problem }}
        </li>
      </template>
    </OneSection>
    <OneSection v-bind:name="jiro" />
  </section>
</template>
