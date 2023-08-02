// import { Label } from "semantic-ui-react";
// import { useState } from "react";
// import { Menu } from "semantic-ui-react";

// export const Category = (props) => {
//   // const { category, onClick } = props;
//   // return (
//   //   <>
//   //     <div
//   //       className="my-[16px] py-[16px] border rounded-md border-gray cursor-pointer hover:bg-gray-100"
//   //       onClick={onClick}
//   //     >
//   //       <Label circular color="blue">
//   //         3
//   //       </Label>
//   //       <span className="ml-1">{category}</span>
//   //     </div>
//   //   </>
//   // );

import { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";

export const Category = (props) => {
  const { categories, onClick } = props;
  const [activeCategory, setActiveCategory] = useState('全カテゴリー');

  const handleActiveCategory = (category) => {
    setActiveCategory(category);
    onClick(category)
  };

  return (
    <Menu pointing secondary vertical fluid>
      <Menu.Item
            name='全カテゴリー'
            active={activeCategory === '全カテゴリー'}
            onClick={() => handleActiveCategory('全カテゴリー')}
          />
      {categories.map((category) => {
        return (
          <Menu.Item
            name={category}
            active={activeCategory === `${category}`}
            onClick={() => handleActiveCategory(category)}
          />
        );
      })}
    </Menu>
  );
};
