import ApiClient from "./ApiClient";
import { POSTS } from "./endpoints";

export class PostApi {
  constructor() {
    this.apiClient = new ApiClient();
  }

  async getPosts(queries = {}) {
    const query = new URLSearchParams(queries).toString();
    const res = await this.apiClient.get(
      POSTS.GET + (query ? `?${query}` : "")
    );
    return res.post_list;
  }

  async postQuestion(postId, params) {
    return await this.apiClient.post(
      POSTS.SINGLE.QUESTIONS.POST.replace("<post_id>", postId),
      params
    );
  }

  async postReply(postId, questionId, params) {
    return await this.apiClient.post(
      POSTS.SINGLE.QUESTIONS.SINGLE.REPLIES.POST.replace(
        "<post_id>",
        postId
      ).replace("<question_id>", questionId),
      params
    );
  }
}
