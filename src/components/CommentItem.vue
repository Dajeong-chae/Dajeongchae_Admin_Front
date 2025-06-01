<script setup lang="ts">
import { computed } from "vue";

const { comment } = defineProps<{
  comment: {
    id: number;
    content: string;
    created_at: string;
  };
}>();

const formattedDate = computed(() =>
  new Date(comment.created_at).toLocaleDateString("ko-KR")
);

const emit = defineEmits(["select"]);
function handleClick() {
  emit("select", comment);
}
</script>

<template>
  <div class="comment-item" @click="handleClick">
    <p class="text">{{ comment.content }}</p>
    <p class="date">
      {{ formattedDate }}
    </p>
  </div>
</template>

<style scoped>
.comment-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.2s ease;
}

.comment-item:hover {
  background-color: rgba(255, 149, 53, 0.5);
  cursor: pointer;
}

.comment-item:active {
  background-color: #ff5b35;
}

.text {
  font-size: 1rem;
  color: #020202;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 0.8rem;
}

.date {
  font-size: 0.8rem;
  color: #7c7c7c;
  white-space: nowrap;
  margin-left: 1rem;
  margin-right: 0.8rem;
}
</style>
