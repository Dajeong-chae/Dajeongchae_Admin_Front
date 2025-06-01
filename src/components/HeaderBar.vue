<script setup lang="ts"></script>

<template>
  <header class="header-bar">
    <h1 class="title">다정단</h1>
    <div class="left-label">Admin 화면입니다.</div>
  </header>
</template>

<style scoped>
.header-bar {
  background-color: #ff5b35;
  width: 100%;
  padding: 1rem 2rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.title {
  font-size: 2rem;
  font-weight: bold;
  margin-right: 1rem;
}

.left-label {
  font-size: 0.9rem;
}
</style>
