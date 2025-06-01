<script setup lang="ts">
import HeaderBar from "./components/HeaderBar.vue";
import CommentList from "./components/CommentList.vue";
import CommentDetail from "./components/CommentDetail.vue";

import { ref, onMounted } from "vue";
import { fetchComments, fetchCommentById } from "./api/adminApi";

const comments = ref<any[]>([]);
const selectedComment = ref<any | null>(null);
const selectedPost = ref<any | null>(null);

// 댓글 조회
onMounted(async () => {
  try {
    const res = await fetchComments();
    comments.value = res;
  } catch (e) {
    console.error("댓글 조회 실패:", e);
  }
});

// 댓글 상세 조회
async function handleCommentClick(comment: any) {
  selectedComment.value = comment;

  try {
    const post = await fetchCommentById(comment.id);
    selectedPost.value = {
      title: post.title,
      content: post.content,
      image_url: post.image_url,
      created_at: post.created_at,
    };
  } catch (e) {
    console.error("게시글 조회 실패:", e);
  }
}
</script>

<template>
  <HeaderBar />

  <div class="whole">
    <div class="half">
      <CommentList :comments="comments" @select-comment="handleCommentClick" />
    </div>
    <div class="half">
      <CommentDetail :comment="selectedComment" :post="selectedPost" />
    </div>
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
  padding: 1rem 2rem 2.5rem 2rem; /*위오아왼*/
}
</style>
