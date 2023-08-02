import { Category } from "../../molecules/Category";
import { Icon } from "semantic-ui-react";

export const SideBar = (props) => {
  const { searchByCategory, categories } = props;
  return (
    <>
      <div className="hidden md:block">
        <div className=" text-center pt-[56px] h-screen">
          {categories.map((category) => (
            <Category
              key={category}
              category={category}
              onClick={() => searchByCategory(category)}
            />
          ))}
        </div>
      </div>
      <button className="block md:hidden flex flex-row pb-[8px]">
        <Icon name="bars" />
      </button>
    </>
  );
};
