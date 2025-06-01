<script setup lang="ts">
defineProps<{
  post: {
    id: number;
    title: string;
    content: string;
    image_url: string | null;
    created_at: string;
  };
}>();

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
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

  <div class="post-foot">
    <p>본문보러 가기</p>
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
  max-height: 200px;
  width: auto;
  object-fit: contain;
  margin: 1rem 0;
}

.post-foot {
  font-size: 0.8rem;
  color: #7c7c7c;
  text-decoration: underline;
  text-align: right;
}
</style>
