export const POSTS = {
  GET: "/posts/",
  USER: {
    GET:"/posts/users/<user_id>/"
  },
  SINGLE: {
    PUT: "/posts/<post_id>/",
    DELETE: "/posts/<post_id>/",
    QUESTIONS: {
      POST: "/posts/<post_id>/questions/",
      SINGLE: {
        PUT: "/posts/<post_id>/questions/<question_id>/",
        DELETE: "/posts/<post_id>/questions/<question_id>/",
        REPLIES: {
          POST: "/posts/<post_id>/questions/<question_id>/replies/",
          SINGLE: {
            PUT: "/posts/<post_id>/questions/<question_id>/replies/<reply_id>/",
            DELETE: "/posts/<post_id>/questions/<question_id>/replies/<reply_id>/",
          },
        },
      },
    },
  },
  CATEGORIES: {
    GET: "/posts/categories/",
  },
};

export const CATEGORIES = {
  REGISTER: {
    POST: "/posts/categories/",
    DELETE: "/posts/categories/<category_id>/",
  },
};

export const ACCOUNTS = {
  REGISTER: {
    POST: "/accounts/register/",
  },
  UPDATE: {
    GET: "/accounts/update/",
  },
  LOGIN: {
    POST: "/accounts/login/",
  },
};
