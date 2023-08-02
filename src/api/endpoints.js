export const POSTS = {
  GET: "/posts",
  SINGLE: {
    QUESTIONS: {
      POST: "/posts/<post_id>/questions",
      SINGLE: {
        REPLIES: {
          POST: "/posts/<post_id>/questions/<question_id>/replies",
        },
      },
    },
  },
};

export const CATEGORIES = {
  GET: "/categories",
};