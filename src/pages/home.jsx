import { SideBar } from "../components/organisms/sidebar";
import { Main } from "../components/organisms/main";
import { useEffect, useState } from "react";
import { Header } from "../components/organisms/header";
import { CategoryApi } from "../api/CategoryApi";
import { PostApi } from "../api/PostApi";

const samplePosts = [
  {
    post_id: 1,
    user_id: "user123",
    user_name: "John Doe",
    post_text: "This is a sample post.",
    category: "Sample Category",
    reply_cnt: 2,
    created_at: "2023-08-01 08:34:16.642726",
    question_list: [
      {
        question_id: 101,
        question_text: "Sample question 1?",
        created_at: "2023-08-01 08:35:20",
        reply_list: [
          {
            reply_id: 201,
            reply_text: "Sample reply to question 1.",
            created_at: "2023-08-01 08:36:10",
          },
          {
            reply_id: 202,
            reply_text: "Another sample reply to question 1.",
            created_at: "2023-08-01 08:37:05",
          },
        ],
      },
      {
        question_id: 102,
        question_text: "Sample question 2?",
        created_at: "2023-08-01 08:38:45",
        reply_list: [
          {
            reply_id: 203,
            reply_text: "Sample reply to question 2.",
            created_at: "2023-08-01 08:39:30",
          },
        ],
      },
    ],
  },
  {
    post_id: 2,
    user_id: "user456",
    user_name: "Jane Smith",
    post_text: "Another sample post.",
    category: "Sample Category 2",
    reply_cnt: 1,
    created_at: "2023-08-01 09:10:55.123456",
    question_list: [
      {
        question_id: 103,
        question_text: "Sample question for post 2?",
        created_at: "2023-08-01 09:12:40",
        reply_list: [],
      },
    ],
  },
  {
    post_id: 3,
    user_id: "user789",
    user_name: "Bob Johnson",
    post_text: "Yet another sample post.",
    category: "Sample Category 3",
    reply_cnt: 0,
    created_at: "2023-08-01 10:05:30.987654",
    question_list: [],
  },
  {
    post_id: 4,
    user_id: "user987",
    user_name: "Alice Brown",
    post_text: "Sample post with no questions.",
    category: "Sample Category 4",
    reply_cnt: 0,
    created_at: "2023-08-01 11:20:15.555555",
    question_list: [],
  },
  {
    post_id: 5,
    user_id: "user246",
    user_name: "David Lee",
    post_text: "One more sample post.",
    category: "Sample Category 5",
    reply_cnt: 3,
    created_at: "2023-08-01 12:45:00.111111",
    question_list: [
      {
        question_id: 104,
        question_text: "Sample question 3?",
        created_at: "2023-08-01 12:46:30",
        reply_list: [
          {
            reply_id: 205,
            reply_text: "Sample reply to question 3.",
            created_at: "2023-08-01 12:47:20",
          },
          {
            reply_id: 206,
            reply_text: "Another sample reply to question 3.",
            created_at: "2023-08-01 12:48:10",
          },
        ],
      },
      {
        question_id: 105,
        question_text: "Sample question 4?",
        created_at: "2023-08-01 12:50:00",
        reply_list: [
          {
            reply_id: 207,
            reply_text: "Sample reply to question 4.",
            created_at: "2023-08-01 12:51:05",
          },
        ],
      },
    ],
  },
];

export const Home = () => {
  const [posts, setPosts] = useState(samplePosts);
  const [categories, setCategories] = useState(["サウナ", "食べ物", "テック"]);

  const fetchPosts = () => {
    const postApi = new PostApi();
    postApi
      .getPosts()
      .then((res) => {
        setPosts(res);
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
    console.log("searching by category: ", category);
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
      });
  };

  useEffect(() => {
    // TODO: バックエンドと通信できるようになったら有効にする
    // fetchPosts();
    // fetchCategories();
  }, []);

  return (
    <div>
      {categories.join(", ")}
      <div className="mb-[32px] mx-[32px] container">
        <Header />
        <div className="md:grid md:grid-cols-4 md:gap-[32px]">
          <div className="md:col-span-1">
            <SideBar
              categories={categories}
              onItemClick={fetchPostsByCategory}
            />
          </div>
          <div className="md:col-span-3">
            <Main posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};
