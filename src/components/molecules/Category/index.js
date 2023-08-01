import { Label } from "semantic-ui-react";

export const Category = ({ category }) => {
  return (
    <>
      <div className="my-[16px] py-[16px] border rounded-md border-gray">
        <Label circular color={"blue"}>3</Label>  {category}
      </div>
    </>
  );
};
