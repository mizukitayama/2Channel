import logo from "../images/logo.png";
import React, { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import { ButtonComponentWithFunction } from "../components/atoms/ButtonComponentWithFunction";
import { useNavigate } from "react-router-dom";
import { Auth } from "../auth/auth";

export const Register = () => {
	const [api, setApi] = useState("")
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate()

	const handleApiChange = (event) => {
    setApi(event.target.value);
  };

	const onRegister = () => {
    setLoading(true);
		const token = api
    Auth.register(token)
      .then((res) => {
        if (res.response && res.response.status !== 200) {
          throw new Error("login failed");
        }
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert("ログインに失敗しました。再度お試しください。");
      })
      .finally(() => {
        setLoading(false);
      });
	}
	const redirectToLogin = () => {
		navigate("/login")
	}

  return <>
	     <Container text>
        <div className="mt-[16px] m-[8px] md:m-[48px]">
          <div className="border border-gray rounded-md p-[48px] col-3 bg-white">
            <img src={logo} alt="GMO 2ch" className="h-[40px]" />
            <hr className="border-blue" />
            <div className="mt-[32px]">
              <Form loading={loading}>
                <Form.Field>
                  <label>APIトークン</label>
                  <input
                    placeholder="API token"
                    value={api}
                    onChange={handleApiChange}
                  />
                </Form.Field>
                <div className="flex justify-between mr-[16px]">
									<div className="text-blue" onClick={redirectToLogin}>ログイン</div>
                  <ButtonComponentWithFunction
                    value={"登録"}
                    onClick={onRegister}
                  />
                </div>
              </Form>
            </div>
          </div>
        </div>
      </Container>
	</>;
};
