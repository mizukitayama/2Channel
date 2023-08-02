import { useState } from "react";

import { Input } from "semantic-ui-react";
import { PostCard } from "../../molecules/PostCard";

export const Main = (props) => {
  const { posts } = props;
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="pb-[24px]">
      <div className="flex justify-between">
        <div className="pt-1 mb-0 hidden md:block text-2xl">全カテゴリー</div>
        <div className="text-lg block md:hidden">全カテゴリー</div>
        <Input
          icon="search"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
