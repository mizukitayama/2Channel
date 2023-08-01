import { SideBar } from "../components/organisms/sidebar";
import { Main } from "../components/organisms/main";
import { Header } from "../components/organisms/header";

export const Home = () => {
  const searchByCategory = (category) => {
    console.log(category);
  };

  return (
    <div>
      <div className="m-[32px]">
        <Header />
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-3">
            <SideBar searchByCategory={searchByCategory} />
          </div>
          <div className="col-span-9">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};
