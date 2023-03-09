<script setup lang="ts">
import OneSection from './components/OneSection.vue';
</script>

<template>
  <section>
    <OneSection>
      <template v-slot:default="slotProps">
        <dl>
          <dt>名前</dt>
          <dd>{{ slotProps.memberInfo.name }}</dd>
          <dt>状況</dt>
          <dd>{{ slotProps.memberInfo.state }}</dd>
        </dl>
      </template>
    </OneSection>

    <!-- default省略 -->
    <OneSection>
      <template v-slot="slotProps">
        <dl>
          <dt>名前</dt>
          <dd>{{ slotProps.memberInfo.name }}</dd>
          <dt>状況</dt>
          <dd>{{ slotProps.memberInfo.state }}</dd>
        </dl>
      </template>
    </OneSection>

    <!-- 分割代入 -->
    <OneSection>
      <template v-slot="{ memberInfo }">
        <dl>
          <dt>名前</dt>
          <dd>{{ memberInfo.name }}</dd>
          <dt>状況</dt>
          <dd>{{ memberInfo.state }}</dd>
        </dl>
      </template>
    </OneSection>

    <!-- フォールバックコンテンツ -->
    <OneSection />
  </section>
</template>
