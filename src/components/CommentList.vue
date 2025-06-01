<!-- 댓글리스트 -->
<script setup lang="ts">
import CommentItem from "./CommentItem.vue";
import MessageLine from "./MessageLine.vue";

const comments = [
  { text: "이건 좀...", date: "2025-06-01" },
  {
    text: "말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요말투가 애매해요",
    date: "2025-06-01",
  },
  { text: "불편할 수도 있겠네요", date: "2025-06-01" },
  { text: "이건 좀...", date: "2025-06-01" },
  { text: "말투가 애매해요", date: "2025-06-01" },
  { text: "불편할 수도 있겠네요", date: "2025-06-01" },
  { text: "이건 좀...", date: "2025-06-01" },
  { text: "말투가 애매해요", date: "2025-06-01" },
  { text: "불편할 수도 있겠네요", date: "2025-06-01" },
  { text: "말투가 애매해요", date: "2025-06-01" },
  { text: "불편할 수도 있겠네요", date: "2025-06-01" },
  { text: "이건 좀...", date: "2025-06-01" },
  { text: "말투가 애매해요", date: "2025-06-01" },
  { text: "불편할 수도 있겠네요", date: "2025-06-01" },
];
</script>

<template>
  <div class="title">
    <p>모델에 의해 <span>애매</span>하다고 분류된 댓글입니다.</p>
  </div>

  <div class="scroll-wrapper">
    <div class="comment-list">
      <template v-if="comments.length > 0">
        <CommentItem
          v-for="(comment, i) in comments"
          :key="i"
          :comment="comment"
        />
      </template>
      <MessageLine v-else message="댓글이 없어요." />
    </div>
  </div>
</template>

<style scoped>
.title {
  font-weight: bold;
}

span {
  color: #ff5b35;
}

.scroll-wrapper {
  border: 2px solid #ff5b35;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
}

.comment-list {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.comment-list::-webkit-scrollbar {
  width: 0.5rem;
}

.comment-list::-webkit-scrollbar-thumb {
  background-color: #ff5b35;
  border-radius: 30px;
}

.comment-list::-webkit-scrollbar-track {
  background: transparent;
}
</style>
