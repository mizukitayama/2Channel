import { useState } from "react";

import { SideBar } from "../components/organisms/sidebar";
import { Main } from "../components/organisms/main";

export const Home = () => {
  const [count, setCount] = useState(0);
  const handleCountUp = () => {
    setCount(count + 1);
  };
  const handleSearch = () => {
    console.log("検索ボタンが押されました");
  };

  return (
    <div>
      <div className="m-[8px]">
        <div className="bg-pink-500">Header</div>
        <div className="grid grid-cols-12 gap-3">
          <div className="col-span-4">
            <SideBar onClick={handleCountUp} onSearch={handleSearch} />
          </div>
          <div className="col-span-8">
            <Main count={count} />
          </div>
        </div>
      </div>
    </div>
  );
};
