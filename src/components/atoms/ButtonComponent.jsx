import { Button } from "semantic-ui-react";
import React from "react"

export const ButtonComponent = ({value}) => {
  return (
    <>
        <Button style={{ backgroundColor: "#005BAB", color: "white" }}>
          {value}
        </Button>
    </>
  );
};
