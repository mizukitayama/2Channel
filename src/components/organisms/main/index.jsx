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
      <div className="flex justify-end">
        <Input
          icon="search"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchInputChange}
        />
      </div>
      {loading ? (
        <div className="text-center mt-10">
          <Loader active inline="centered">
            読み込み中
          </Loader>
        </div>
      ) : (
        <>
          {searchHitPosts.map((post) => (
            <PostCard post={post} />
          ))}
          {searchHitPosts.length === 0 && (
            <Segment placeholder>
              <h3 className="text-center text-gray-300">
                まだ投稿がありません 🐥
              </h3>
            </Segment>
          )}
        </>
      )}
    </div>
  );
};
