import { Category } from "../../molecules/Category";
import { Icon } from "semantic-ui-react";
import { CategoryRow } from "../../molecules/Category/row";

export const SideBar = (props) => {
  const { onItemClick, categories } = props;
  return (
    <>
      <div className="hidden md:block">
        <div className=" text-center pt-[56px] h-screen">
            <Category
              categories={categories}
              onClick={onItemClick}
            />
        </div>
      </div>
      <button className="block md:hidden flex flex-row pb-[8px]">
        <CategoryRow categories={categories} onClick={onItemClick}/>
      </button>
    </>
  );
};
