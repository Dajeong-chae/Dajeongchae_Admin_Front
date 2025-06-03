<script setup lang="ts">
import PostDetail from "./PostDetail.vue";
import MessageLine from "./MessageLine.vue";

import { ref, watchEffect } from "vue";
import { updateCommentById } from "../api/adminApi";

const showReasonInput = ref(false); // 악플 버튼 클릭 여부
const isSubmitted = ref(false); // 등록 버튼 클릭 여부
const reason = ref(""); // 악플 사유

const props = defineProps<{
  comment: {
    id: number;
    content: string;
  } | null;
  post: {
    id: number;
    title: string;
    content: string;
    image_url: string | null;
    created_at: string;
  } | null;
}>();

const emit = defineEmits<{
  (e: "refresh-comments"): void;
}>();

watchEffect(() => {
  console.log("댓글:", props.comment);
  console.log("포스트:", props.post);

  if (props.comment && props.post) {
    isSubmitted.value = false;
    showReasonInput.value = false;
    reason.value = "";
  }
});

// TODO: 검토 완료 댓글 (악플)
function handleSubmit() {
  if (reason.value.trim()) {
    isSubmitted.value = true;
    showReasonInput.value = false;
  } else {
    alert("이유를 입력해주세요.");
  }
}

// 검토 완료 댓글 (악플아님)
async function handleNoClick() {
  if (!props.comment) return;

  try {
    await updateCommentById(props.comment.id);
    emit("refresh-comments"); // 상위 컴포넌트에서 댓글 새로고침
    isSubmitted.value = true;
    showReasonInput.value = false;
    reason.value = "";
  } catch (e) {
    console.error("댓글 수정 실패:", e);
    alert("댓글 수정 실패");
  }
}
</script>

<template>
  <div class="title">
    <p>선택하신 댓글입니다.</p>
  </div>

  <div class="comment-detail">
    <template v-if="isSubmitted">
      <MessageLine message="등록되었습니다." />
    </template>

    <template v-else-if="props.comment && props.post">
      <!-- 게시글 -->
      <div class="post-scroll">
        <PostDetail :post="props.post" />
      </div>

      <!-- 댓글 및 판단 -->
      <div class="comment-wrapper">
        <div class="comment">
          <img src="../assets/comment.png" />
          <p>{{ props.comment.content }}</p>
        </div>

        <!-- 버튼 -->
        <div v-if="!showReasonInput" class="button-wrapper">
          <button class="no-button" @click="handleNoClick">악플 아님</button>
          <button class="yes-button" @click="showReasonInput = true">
            악플
          </button>
        </div>

        <!-- 이유 입력 -->
        <div v-else class="reason-box">
          <p class="reason-label">악플이라고 생각하신 이유는?</p>
          <div class="reason-input-wrapper">
            <input
              v-model="reason"
              placeholder="이유를 입력해주세요"
              class="reason-input"
            />
            <button class="submit-button" @click="handleNoClick">등록</button>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <MessageLine message="댓글을 선택해주세요." />
    </template>
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
  height: 50px;
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

.reason-box {
  height: 50px; /* 버튼과 동일한 높이 */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 20px;
}

.reason-label {
  color: #ff5b35;
  font-size: 0.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.reason-input-wrapper {
  display: flex;
  align-items: center;
}

.reason-input {
  flex: 1;
  background-color: #e6e6e6;
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
}

.submit-button {
  background-color: #ff5b35;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin-left: 0.5rem;
  cursor: pointer;
}

.submit-button:hover {
  background-color: #e04d29;
}
</style>
