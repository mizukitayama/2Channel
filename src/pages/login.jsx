import imagemd from "../images/image-md.png";
import logo from "../images/logo.png";
import React, { useState } from "react";
import { Button, Checkbox, Container, Form } from "semantic-ui-react";
import { ButtonComponent } from "../components/atoms/ButtonComponent";

export const Login = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [workspaceId, setWorkspaceId] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    // setIsFetching(!isFetching);
    console.log(workspaceId);
    console.log(userId);
    console.log(password);
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
          <div className="m-[48px]">
            <div className="border border-gray rounded-md p-[48px] col-3 bg-white">
              <img src={logo} className="h-[30px]" />
							<hr className="border-blue"/>
              <div className="mt-[16px]">
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
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </Form.Field>
                  <ButtonComponent value={"Log In"} onClick={onLogin} />
                </Form>
              </div>
            </div>
          </div>
        </Container>
    </>
  );
};
