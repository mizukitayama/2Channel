import { useState } from "react";
import {
  Comment,
  Form,
  Button,
  Card,
  Divider,
  Icon,
  Input,
} from "semantic-ui-react";
import { PostCard } from "../../molecules/PostCard";

export const Main = (props) => {
  // const { posts } = props;
  const posts = Array(10).fill(0);
  return (
    <div className="m-3">
      <div className="flex justify-between">
        <h2 className="pt-1 mb-0">全カテゴリー</h2>
        <Input icon="search" placeholder="Search..." className="" />
      </div>
      {posts.map((post) => (
        <PostCard />
      ))}
    </div>
  );
};
