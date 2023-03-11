<template>
  <h1>会員管理</h1>
  <nav id="breadcrumbs">
    <ul>
      <li>
        <RouterLink v-bind:to="{ name: 'AppTop' }">
          TOP
        </RouterLink>
      </li>
      <li>
        <RouterLink v-bind:to="{ name: 'MemberList' }">
          会員リスト
        </RouterLink>
      </li>
      <li>会員情報詳細</li>
    </ul>
  </nav>
  <section>
    <h2>会員情報詳細</h2>
  </section>
</template>
