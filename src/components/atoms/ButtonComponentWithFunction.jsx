import { Button } from "semantic-ui-react";
import React from "react"

export const ButtonComponentWithFunction = ({value, onClick}) => {
  return (
    <>
        <Button style={{ backgroundColor: "#005BAB", color: "white" }} onClick={onClick}>
          {value}
        </Button>
    </>
  );
};
