import ApiClient from "./ApiClient";
import { ACCOUNTS } from "./endpoints";

export class AuthApi {
  constructor() {
    this.apiClient = new ApiClient();
  }

  async register(token) {
    const params = { token: token };
    try {
      return await this.apiClient.postWithoutToken(
        ACCOUNTS.REGISTER.POST,
        params
      );
    } catch (e) {
      throw e;
    }
  }

  async update() {
    try {
      return await this.apiClient.get(
        ACCOUNTS.UPDATE.GET,
      );
    } catch (e) {
      throw e;
    }
  }

  async login(workspaceId, userId, password) {
    const params = {
      workspace_id: workspaceId,
      user_id: userId,
      password: password,
    };
    try {
      return await this.apiClient.postWithoutToken(ACCOUNTS.LOGIN.POST, params);
    } catch (e) {
      throw e;
    }
  }
}
