export const POSTS = {
  GET: "/posts/",
  SINGLE: {
    QUESTIONS: {
      POST: "/posts/<post_id>/questions/",
      SINGLE: {
        REPLIES: {
          POST: "/posts/<post_id>/questions/<question_id>/replies/",
        },
      },
    },
  },
  CATEGORIES: {
    GET: "/posts/categories/",
    POST: "/posts/categories/",
    DELETE: "/posts/categories/<category_id>/"
  }
};

export const ACCOUNTS = {
  REGISTER: {
    POST: "/accounts/register/",
  },
  LOGIN: {
    POST: "/accounts/login/",
  },
};
