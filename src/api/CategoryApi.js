import ApiClient from "./ApiClient";
import { POSTS } from "./endpoints";

export class CategoryApi {
  constructor() {
    this.apiClient = new ApiClient();
  }

  async getCategories() {
    return await this.apiClient.get(POSTS.CATEGORIES.GET);
  }

  async postCategory(params) {
    return await this.apiClient.post(POSTS.CATEGORIES.POST, params);
  }

  async deleteCategory(postId) {
    return await this.apiClient.delete(POSTS.CATEGORIES.DELETE.replace("<category_id>", postId));
  }
}
