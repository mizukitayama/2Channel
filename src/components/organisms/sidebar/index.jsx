import { Category } from "../../molecules/Category";
import { Icon } from "semantic-ui-react";

export const SideBar = (props) => {
  const { searchByCategory } = props;
  const categories = ["サウナ", "食べ物", "テック"];
  return (
    <>
      <div className="hidden md:block">
        <div className=" text-center pt-[56px] h-screen">
          {categories.map((category, index) => (
            <div key={index} onClick={() => searchByCategory(category)}>
              <Category category={category} />
            </div>
          ))}
        </div>
      </div>
      <button className="block md:hidden flex flex-row pb-[8px]"><Icon name="bars"/></button>
    </>
  );
};
