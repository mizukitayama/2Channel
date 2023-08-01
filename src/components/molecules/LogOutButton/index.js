import { Button } from "semantic-ui-react";

export const LogOutButton = () => {
  return (
    <>
      <div className="col-end-13 col-span-2 flex justify-center">
        <Button style={{ backgroundColor: "#005BAB", color: "white" }}>
          Log Out
        </Button>
      </div>
    </>
  );
};
