import { Button } from "semantic-ui-react";

export const LogOutButton = () => {
  return (
    <>
      <div className="flex justify-end">
        <Button style={{ backgroundColor: "#005BAB", color: "white" }}>
          Log Out
        </Button>
      </div>
    </>
  );
};
