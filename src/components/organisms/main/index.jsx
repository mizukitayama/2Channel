import { useState } from "react";

import { Input, Dimmer, Loader, Segment } from "semantic-ui-react";
import { PostCard } from "../../molecules/PostCard";

export const Main = (props) => {
  const { posts, loading = false } = props;
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const searchHitPosts = posts.filter((post) => {
    if (searchValue === "") {
      return true;
    }
    return post.post_text.includes(searchValue); // 検索にヒットした投稿のみを抽出
  });

  return (
    <div className="pb-[24px]">
      {loading ? (
        <div className="text-center">
          <Loader active inline="centered">
            読み込み中
          </Loader>
        </div>
      ) : (
        <>
          <div className="flex justify-between">
            <div className="pt-1 mb-0 hidden md:block text-2xl">
              全カテゴリー
            </div>
            <div className="text-lg block md:hidden">全カテゴリー</div>
            <Input
              icon="search"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchInputChange}
            />
          </div>
          {searchHitPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </>
      )}
    </div>
  );
};
