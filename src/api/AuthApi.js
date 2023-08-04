import ApiClient from "./ApiClient";
import { ACCOUNTS } from "./endpoints";

export class AuthApi {
  constructor() {
    this.apiClient = new ApiClient();
  }

  async register() {
    try {
      return await this.apiClient.postWithoutToken(
        ACCOUNTS.REGISTER.POST,
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
