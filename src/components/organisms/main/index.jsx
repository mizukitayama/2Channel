import { Input } from "semantic-ui-react";
import { PostCard } from "../../molecules/PostCard";

export const Main = (props) => {
  const { posts } = props;
  return (
    <div className="m-3">
      <div className="flex justify-between">
        <h2 className="pt-1 mb-0">全カテゴリー</h2>
        <Input icon="search" placeholder="Search..." />
      </div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
