import { AuthApi } from "../api/AuthApi";
import { PostApi } from "../api/PostApi";

export class Auth {
  static async register() {
    const authApi = new AuthApi();
    return authApi
      .register()
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e;
      });
  }

  static async login(workspaceId, userId, password) {
    const authApi = new AuthApi();
    return authApi
      .login(workspaceId, userId, password)
      .then((res) => {
        return res;
      })
      .catch((e) => {
        return e;
      });
  }

  static logout() {
    console.log("logout");
    for (const key in localStorage) {
      if (key.startsWith("GMO2ch.")) {
        localStorage.removeItem(key);
      }
    }
    window.location.reload();
  }

  static isLoggedIn() {
    // ローカルストレージにtokenが存在しなければログインしていない
    if (localStorage.getItem("GMO2ch.access") === null) {
      return false;
    }
    // FIXME: トークンが有効かどうかをサーバに問い合わせてチェックする
    return true;
  }
}
