import logo from "../images/logo.png";
import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import { ButtonComponentWithFunction } from "../components/atoms/ButtonComponentWithFunction";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const [isFetching, setIsFetching] = useState(false);
  const [workspaceId, setWorkspaceId] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    navigate("/");
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

  return (
    <>
      <Container text>
        <div className="mt-[16px] m-[8px] md:m-[48px]">
          <div className="border border-gray rounded-md p-[48px] col-3 bg-white">
            <img src={logo} className="h-[40px]" />
            <hr className="border-blue" />
            <div className="mt-[32px]">
              <Form>
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
                <div className="flex justify-end mr-[16px]">
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
