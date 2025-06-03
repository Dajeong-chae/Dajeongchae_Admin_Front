<script setup lang="ts">
defineProps<{ message: string }>();
</script>

<template>
  <p class="empty-message">{{ message }}</p>
</template>

<style scoped>
.empty-message {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.2rem;
  color: #7c7c7c;
}
</style>
