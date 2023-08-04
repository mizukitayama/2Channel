import React, { useEffect, useState } from "react";
import { Menu } from "semantic-ui-react";

export const CategoryRow = (props) => {
  const { categories, onClick } = props;
  const [activeCategory, setActiveCategory] = useState("all");
  const categoryKeys = Object.keys(categories);

  const handleActiveCategory = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      category = "";
    }
    onClick(category);
  };

  let other_id = -1;
  Object.keys(categories).forEach((key) => {
    if (categories[key].category_name === "その他") {
      other_id = key;
    }
  });
  return (
    <div className="overflow-auto">
      <Menu pointing secondary>
        <Menu.Item
          name="全カテゴリー"
          active={activeCategory === "all"}
          onClick={() => handleActiveCategory("all")}
          class
        />
        {categoryKeys.map((category) => {
          return (
            <>
              {categories[category].category_name === "その他" ? null : (
                <Menu.Item
                  name={categories[category].category_name}
                  active={activeCategory === `${category}`}
                  onClick={() => handleActiveCategory(category)}
                />
              )}
            </>
          );
        })}

        <Menu.Item
          name={"その他"}
          active={activeCategory === other_id}
          onClick={() => handleActiveCategory(other_id)}
        />
        <Menu.Item
          name="自分の投稿"
          active={activeCategory === "mine"}
          onClick={() => handleActiveCategory("mine")}
          class
        />
      </Menu>
    </div>
  );
};
