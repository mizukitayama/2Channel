import logo from "../images/logo.png";
import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import { ButtonComponentWithFunction } from "../components/atoms/ButtonComponentWithFunction";
import { useNavigate } from "react-router-dom";
import { Auth } from "../auth/auth";

export const Login = () => {
  const [loading, setLoading] = useState(false);
  const [workspaceId, setWorkspaceId] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onLogin = () => {
    setLoading(true);
    Auth.login(workspaceId, userId, password)
      .then((res) => {
        if (res.response && res.response.status !== 200) {
          throw new Error("login failed");
        }
        Object.keys(res).forEach((key) => {
          const newKey = "GMO2ch." + key;
          localStorage.setItem(newKey, res[key]);
        });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("ログインに失敗しました。再度お試しください。");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleWorkspaceIdChange = (event) => {
    setWorkspaceId(event.target.value);
  };

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const redirectToRegister = () => {
		navigate("/register")
	}


  return (
    <>
      <Container text>
        <div className="mt-[16px] m-[8px] md:m-[48px]">
          <div className="border border-gray rounded-md p-[48px] col-3 bg-white">
            <img src={logo} alt="GMO 2ch" className="h-[40px]" />
            <hr className="border-blue" />
            <div className="mt-[32px]">
              <Form loading={loading}>
                <Form.Field>
                  <label>ワークスペースのID</label>
                  <input
                    placeholder="Workspace ID"
                    value={workspaceId}
                    onChange={handleWorkspaceIdChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>ユーザーID</label>
                  <input
                    placeholder="Slack User ID"
                    value={userId}
                    onChange={handleUserIdChange}
                  />
                </Form.Field>
                <Form.Field>
                  <label>パスワード</label>
                  <input
                    placeholder="Password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Form.Field>
                <div className="flex justify-between mr-[16px]">
									<div className="text-blue" onClick={redirectToRegister}>ワークスペースの追加</div>
                  <ButtonComponentWithFunction
                    value={"ログイン"}
                    onClick={onLogin}
                  />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
