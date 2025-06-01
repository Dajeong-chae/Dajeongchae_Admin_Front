<script setup lang="ts">
import PostDetail from "./PostDetail.vue";
import MessageLine from "./MessageLine.vue";

const selectedComment =
  "댓글입니다,selectedCommentselec다,selectedCommentselectedCommentselectedComment댓글입니다,selectedCommentselectedCommentselectedComment댓글입니다,selectedCommentselectedCommentselectedComment";
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
      <div class="post-scroll">
        <PostDetail :post="selectedPost" />
      </div>

      <!-- 댓글 및 판단 -->
      <div class="goto-post">
        <p>본문보러 가기</p>
      </div>
      <div class="comment-wrapper">
        <div class="comment">
          <img src="../assets/comment.png" />
          <p>{{ selectedComment }}</p>
        </div>
        <div class="button-wrapper">
          <button class="no-button">악플 아님</button>
          <button class="yes-button">악플</button>
        </div>
      </div>
    </template>
    <MessageLine v-else message="댓글을 선택해주세요." />
  </div>
</template>

<style scoped>
.comment-detail {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid #ff5b35;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  padding: 0 2rem 1.6rem 2rem;
}

.title {
  font-weight: bold;
}

.post-scroll {
  flex: 1;
  overflow-y: auto;
  margin-top: 1.6rem;
  padding-right: 0.5rem;
}

.post-scroll::-webkit-scrollbar {
  width: 0.5rem;
}

.post-scroll::-webkit-scrollbar-thumb {
  margin-top: 20px;
  background-color: #ff5b35;
  border-radius: 30px;
}

.post-scroll::-webkit-scrollbar-track {
  background: transparent;
}

.goto-post p {
  margin: 0;
  font-size: 0.8rem;
  color: #7c7c7c;
  text-decoration: underline;
  text-align: right;
}

.comment {
  display: flex;
  align-items: center;
}

.comment p {
  margin-left: 0.5rem;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 3rem;
}

.no-button,
.yes-button {
  width: 44%;
  aspect-ratio: 4;
  border: none;
  color: white;
  border-radius: 20px;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.2s ease;
}

.no-button {
  background-color: #e6e6e6;
}

.no-button:hover {
  background-color: #d5d5d5;
}

.yes-button {
  background-color: #ff5b35;
}

.yes-button:hover {
  background-color: #e04d29;
}
</style>
