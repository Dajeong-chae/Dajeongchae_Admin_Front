import adminClient from "./adminClient";

// 댓글 조회
export async function fetchComments() {
  const response = await adminClient.get("/");
  return response.data;
}

// 댓글 상세 조회
export async function fetchCommentById(commentId: number) {
  const response = await adminClient.get(`/${commentId}`);
  return response.data;
}

// 댓글 수정
export async function updateCommentById(commentId: number) {
  const response = await adminClient.put(`/${commentId}`);
  return response.data;
}

// 댓글 삭제
export async function deleteCommentById(commentId: number) {
  const response = await adminClient.delete(`/${commentId}`);
  return response.data;
}
