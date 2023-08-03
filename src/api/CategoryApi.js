import ApiClient from "./ApiClient";
import { POSTS } from "./endpoints";

export class CategoryApi {
  constructor() {
    this.apiClient = new ApiClient();
  }

  async getCategories() {
    return await this.apiClient.get(POSTS.CATEGORIES.GET);
  }
}
