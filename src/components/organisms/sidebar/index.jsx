import { Category } from "../../molecules/Category";

export const SideBar = (props) => {
  const { searchByCategory } = props;
  const categories = ["サウナ", "食べ物", "テック"];
  return (
    <div className="">
      <div className=" text-center my-[8px] pt-[56px] h-screen">
        {categories.map((category, index) => (
          <div
					key={index} onClick={() => searchByCategory(category)}>
						<Category category={category}/>
          </div>
        ))}
      </div>
    </div>
  );
};
