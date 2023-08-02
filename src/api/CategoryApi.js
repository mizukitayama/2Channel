import ApiClient from "./ApiClient";
import { CATEGORIES } from "./endpoints";

export class CategoryApi {
  constructor() {
    this.apiClient = new ApiClient();
  }

  async getCategories() {
    return await this.apiClient.get(CATEGORIES.GET);
  }
}
