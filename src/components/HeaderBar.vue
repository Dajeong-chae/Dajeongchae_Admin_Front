<script setup lang="ts"></script>

<template>
  <header class="header-bar">
    <h1 class="main-title">다정단</h1>
    <div class="description">Admin 화면입니다.</div>
  </header>
</template>

<style scoped>
.header-bar {
  background-color: #ff5b35;
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.main-title {
  font-size: 2rem;
  font-weight: bold;
  margin-right: 1rem;
}

.description {
  font-size: 0.9rem;
}
</style>
