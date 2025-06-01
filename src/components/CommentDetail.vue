<script setup lang="ts">
import PostDetail from "./PostDetail.vue";
import MessageLine from "./MessageLine.vue";

// 예시용 selectedPost, 실제로는 props나 Vuex/Pinia 등을 통해 전달
// const selectedPost = null;
const selectedPost = {
  id: 1,
  title: "테스트 글입니다",
  content: "글 내용을 작성해봅니다.",
  image_url: "https://ifh.cc/g/y0c5dR.jpg",
  created_at: "2025-05-29",
};
</script>

<template>
  <div class="title">
    <p>선택하신 댓글입니다.</p>
  </div>

  <div class="comment-detail">
    <template v-if="selectedPost">
      <!-- 게시글 -->
      <PostDetail :post="selectedPost" />

      <!-- 댓글 및 판단 -->
      <div class="comment">
        <img src="../assets/comment.png" />
        <p>댓글</p>
      </div>
      <div>
        <button>악플 아님</button>
        <button>악플</button>
      </div>
    </template>
    <MessageLine v-else message="댓글을 선택해주세요." />
  </div>
</template>

<style scoped>
.title {
  font-weight: bold;
}

.comment-detail {
  border: 2px solid #ff5b35;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  padding: 0.2rem 2rem 0 2rem;
}

.comment {
  display: flex;
  align-items: center;
}
</style>
