import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";

export const CategoryRow = (props) => {
  const { categories, onClick } = props;
  const [activeCategory, setActiveCategory] = useState("all");

  const handleActiveCategory = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      category = "";
    }
    onClick(category);
  };

  return (
    <div className="overflow-auto">
      <Menu pointing secondary>
        <Menu.Item
          name="全カテゴリー"
          active={activeCategory === "all"}
          onClick={() => handleActiveCategory("all")}
          class
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
    </div>
  );
};
