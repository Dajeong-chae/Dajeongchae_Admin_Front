<script setup lang="ts">
import HeaderBar from "./components/HeaderBar.vue";
import CommentList from "./components/CommentList.vue";
import CommentDetail from "./components/CommentDetail.vue";
</script>

<template>
  <HeaderBar />

  <div class="whole">
    <div class="half"><CommentList /></div>
    <div class="half"><CommentDetail /></div>
  </div>
</template>

<style scoped>
.whole {
  display: flex;
  width: 100%;
  height: 100vh;
  padding-bottom: 120px;
}

.half {
  width: 50%;
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 2rem;
}
</style>
