import { SideBar } from "../components/organisms/sidebar";
import { Main } from "../components/organisms/main";
import React, { useEffect, useState } from "react";
import { Header } from "../components/organisms/header";
import { CategoryApi } from "../api/CategoryApi";
import { PostApi } from "../api/PostApi";
import { CoverImage } from "./coverImage";
import { Container } from "semantic-ui-react";

export const UpdatePosts = React.createContext({});
export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([
    "sauna",
    "food",
    "tech",
    "other",
  ]);
  const [tasksLoading, setTasksLoading] = useState(false);
  const [categoriesLoading, setCategoriesLoading] = useState(false);

  const fetchPosts = () => {
    const postApi = new PostApi();
    postApi
      .getPosts()
      .then((res) => {
        setPosts(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchCategories = () => {
    const categoryApi = new CategoryApi();
    categoryApi
      .getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchPostsByCategory = (category) => {
    setTasksLoading(true);
    setPosts([]);
    const postApi = new PostApi();
    postApi
      .getPosts({
        category: category,
      })
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTasksLoading(false);
      });
  };

  useEffect(() => {
    // TODO: バックエンドと通信できるようになったら有効にする
    fetchPosts();
    // fetchCategories();
  }, []);

  return (
    <>
      <div>
        <Container>
          <div className="mb-[32px] mx-[32px] container">
            <Header />
            <div className="md:grid md:grid-cols-4 md:gap-[30px]">
              <div className="md:col-span-1">
                <SideBar
                  categories={categories}
                  onItemClick={fetchPostsByCategory}
                />
              </div>
              <div className="md:col-span-3">
                <UpdatePosts.Provider value={{ posts, setPosts, fetchPosts }}>
                  <Main posts={posts} loading={tasksLoading} />
                </UpdatePosts.Provider>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <CoverImage />
    </>
  );
};
