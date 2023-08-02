import { ButtonComponent } from "../../atoms/ButtonComponent";
import { Logo } from "../../molecules/Logo";
import { useNavigate } from "react-router-dom";

export const Header = () => {
	const navigate = useNavigate()
	const redirectToHome = () => {
		navigate('/')
	}
  return (
    <>
      <div className="flex flex-row justify-between sticky top-0 z-10 bg-white py-[32px] -mx-[2px]">
        <div className="h-[25px]" onClick={redirectToHome}>
          <Logo />
        </div>
        <ButtonComponent value={"ログアウト"} className="flex justify-end" />
      </div>
    </>
  );
};
