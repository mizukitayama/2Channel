import { Label } from "semantic-ui-react";

export const Category = (props) => {
  const { category, onClick } = props;
  return (
    <>
      <div
        className="my-[16px] py-[16px] border rounded-md border-gray cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <Label circular color="blue">
          3
        </Label>
        <span className="ml-1">{category}</span>
      </div>
    </>
  );
};
