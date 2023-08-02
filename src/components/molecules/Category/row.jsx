import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";

export const CategoryRow = (props) => {
  const { categories, onClick } = props;
  const [activeCategory, setActiveCategory] = useState('全カテゴリー');

  const handleActiveCategory = (category) => {
    setActiveCategory(category);
    onClick(category);
  };

  return (
    <Menu pointing secondary>
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
