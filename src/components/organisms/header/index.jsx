import { Logo } from "../../molecules/Logo";
import { useNavigate } from "react-router-dom";
import { Icon, Dropdown, Image, Container } from "semantic-ui-react";
import { Auth } from "../../../auth/auth";

export const Header = () => {
  const userImage = localStorage.getItem("GMO2ch.image_url");
  const userName = localStorage.getItem("GMO2ch.user_name");
  const isUserOwner = localStorage.getItem("GMO2ch.is_owner");

  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };

  const handleOptionClick = (optionKey) => {
    switch (optionKey) {
      case "home":
        navigate("/");
        break;
      case "sign-out":
        Auth.logout();
        break;
      case "settings":
        navigate("/admin");
        break;
      default:
        break;
    }
  };

  const triggermd = (
    <>
        <Image src={userImage} avatar /> {userName}
    </>
  );
  const trigger = (
    <>{userName}
    </>
  );
let options;
  if (isUserOwner) {
    options = [
      { key: "home", value: "home", text: "ホーム"},
      { key: "settings", value: "settings", text: "管理者画面" },
      { key: "sign-out", value: "sign-out", text: "ログアウト" },
    ];
  } else {
    options = [
      { key: "home", value: "home", text: "ホーム"},
      { key: "sign-out", value: "sign-out", text: "ログアウト" },
    ];
  }

  return (
    <>
      <div className="flex flex-row justify-between sticky top-0 z-10 bg-white py-[32px] -mx-[2px]">
        <div className="h-[25px]" onClick={redirectToHome}>
          <Logo />
        </div>
        <div className="grid gap-[8px] block md:hidden">
          <Dropdown
            pointing="top right"
            compact
            openOnFocus
            trigger={trigger}
            options={options}
            onChange={(event, data) => handleOptionClick(data.value)}
          />
        </div>
        <div className="grid text-center hidden md:block">
          <Dropdown
            pointing="top right"
            compact
            openOnFocus
            trigger={triggermd}
            options={options}
            onChange={(event, data) => handleOptionClick(data.value)}
          />
        </div>
      </div>
    </>
  );
};
