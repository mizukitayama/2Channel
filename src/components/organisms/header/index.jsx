import { ButtonComponent } from "../../atoms/ButtonComponent";
import { Logo } from "../../molecules/Logo";
import { useNavigate } from "react-router-dom";
import { Icon, Dropdown } from "semantic-ui-react";

export const Header = () => {
  const navigate = useNavigate();
  const redirectToHome = () => {
    navigate("/");
  };

  const handleOptionClick = (optionKey) => {
    switch (optionKey) {
      case "sign-out":
        console.log("sign out clicked");
        break;
      case "settings":
        navigate("/admin");
        break;
      default:
        break;
    }
  };

  const trigger = (
    <span>
      <Icon name="user" />
      User Name
    </span>
  );

  const options = [
    { key: "settings", value: "settings", text: "Settings" },
    { key: "sign-out", value: "sign-out", text: "Sign Out" },
  ];
  return (
    <>
      <div className="flex flex-row justify-between sticky top-0 z-10 bg-white py-[32px] -mx-[2px]">
        <div className="h-[25px]" onClick={redirectToHome}>
          <Logo />
        </div>
        <div className="grid gap-[8px]">
          <Dropdown
            trigger={trigger}
            options={options}
            onChange={(event, data) => handleOptionClick(data.value)}
          />
        </div>
      </div>
    </>
  );
};
