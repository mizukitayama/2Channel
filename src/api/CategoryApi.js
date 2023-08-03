import ApiClient from "./ApiClient";
import { POSTS, CATEGORIES } from "./endpoints";

export class CategoryApi {
  constructor() {
    this.apiClient = new ApiClient();
  }

  async getCategories() {
    return await this.apiClient.get(POSTS.CATEGORIES.GET);
  }
  async postCategory(params) {
    return await this.apiClient.post(CATEGORIES.REGISTER.POST, params);
  }
}
