<script setup lang="ts">
const { post } = defineProps<{
  post: {
    id: number;
    title: string;
    content: string;
    image_url: string | null;
    created_at: string;
  };
}>();

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
</script>

<template>
  <!-- 제목 & 날짜 -->
  <div class="post-head">
    <p class="post-title">{{ post.title }}</p>
    <p>{{ formatDate(post.created_at) }}</p>
  </div>

  <!-- 내용 & 이미지 & 본문 -->
  <div class="post-body">
    <p>{{ post.content }}</p>
    <div v-if="post.image_url" class="post-image-wrapper">
      <img :src="post.image_url" alt="게시글 이미지" class="post-image" />
    </div>
  </div>
</template>

<style scoped>
.post-head {
  display: flex;
  justify-content: space-between; /* 제목은 왼쪽, 날짜는 오른쪽 */
  align-items: center;
}

.post-title {
  font-size: 1.6rem;
  font-weight: bold;
}

.post-body p {
  margin: 0;
}

.post-image-wrapper {
  display: flex;
  justify-content: center;
}

.post-image {
  max-height: 100px;
  width: auto;
  object-fit: contain;
  margin: 1rem 0;
}
</style>
