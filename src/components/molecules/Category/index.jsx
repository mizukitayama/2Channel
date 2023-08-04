import { useState, useEffect } from "react";
import { Menu } from "semantic-ui-react";

export const Category = (props) => {
  const { categories, onClick } = props;
  const [activeCategory, setActiveCategory] = useState("all");
  const categoryKeys = Object.keys(categories);

  const handleActiveCategory = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      category = ""; // カテゴリーが全カテゴリーの場合はcategoryを指定しない
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
    <Menu pointing secondary vertical fluid>
      <Menu.Item
        name="全カテゴリー"
        active={activeCategory === "all"}
        onClick={() => handleActiveCategory("all")}
        className="text-lg"
      />
      {categoryKeys.map((category) => {
        return (
          <>
            {categories[category].category_name === "その他" ? null : (
              <Menu.Item
                name={categories[category].category_name}
                active={activeCategory === `${category}`}
                onClick={() => handleActiveCategory(category)}
                className="text-lg"
              />
            )}
          </>
        );
      })}

      <Menu.Item
        name="その他"
        active={activeCategory === other_id}
        onClick={() => handleActiveCategory(other_id)}
        className="text-lg"
      />
      <Menu.Item
        name="自分の投稿"
        active={activeCategory === "mine"}
        onClick={() => handleActiveCategory("mine")}
        className="text-lg"
      />
    </Menu>
  );
};
