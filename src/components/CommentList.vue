<script setup lang="ts">
import CommentItem from "./CommentItem.vue";
import MessageLine from "./MessageLine.vue";

import { computed } from "vue";

const props = defineProps<{
  comments?: any[]; // 안전하게 optional로 받기
}>();

const safeComments = computed(() => props.comments ?? []);

const emit = defineEmits(["select-comment"]);

function handleClick(comment: any) {
  emit("select-comment", comment.id);
}
</script>

<template>
  <div class="title">
    <p>모델에 의해 <span>애매</span>하다고 분류된 댓글입니다.</p>
  </div>

  <div class="comment-scroll">
    <div class="comment-list">
      <template v-if="comments && comments.length > 0">
        <CommentItem
          v-for="comment in safeComments"
          :key="comment.id"
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

.comment-scroll {
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
