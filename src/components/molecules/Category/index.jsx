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
          <Menu.Item
            name={categories[category].category_name}
            active={activeCategory === `${category}`}
            onClick={() => handleActiveCategory(category)}
            className="text-lg"
          />
        );
      })}
    </Menu>
  );
};
