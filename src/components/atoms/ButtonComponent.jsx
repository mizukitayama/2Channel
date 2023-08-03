import { Button } from "semantic-ui-react";
import React from "react";

export const ButtonComponent = ({ value, onClick }) => {
  return (
    <>
      <Button
        style={{ backgroundColor: "#005BAB", color: "white" }}
        onClick={onClick}
      >
        {value}
      </Button>
    </>
  );
};
