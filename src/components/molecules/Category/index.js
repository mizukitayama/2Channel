import { Label } from "semantic-ui-react";

import { CATEGORY } from "../../../constants/category";

export const Category = (props) => {
  const { category, onClick } = props;
  return (
    <>
      <div
        className="my-[16px] py-[16px] border rounded-md border-gray cursor-pointer hover:bg-gray-100"
        onClick={onClick}
      >
        <span className="ml-1">{CATEGORY[category].name}</span>
      </div>
    </>
  );
};
