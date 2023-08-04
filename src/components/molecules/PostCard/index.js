import { useState, useEffect, useContext } from "react";
import {
  Comment,
  Form,
  Button,
  Card,
  Icon,
  Input,
  Message,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { PostApi } from "../../../api/PostApi";
import { UpdatePosts } from "../../../pages/home";

const getDateLabel = (date) => {
  const dateObj = new Date(date);
  const year = dateObj.getFullYear();
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const hour = dateObj.getHours();
  const minute = ("00" + dateObj.getMinutes()).slice(-2);
  return `${year}/${month}/${day} ${hour}:${minute}`;
};
export const PostCard = (props) => {
  const { post } = props;
  const [chatLogOpen, setChatLogOpen] = useState(false);
  const [inputFormOpen, setInputFormOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(false);
  const [delPostLoading, setDelPostLoading] = useState(false);
  const [editPost, setEditPost] = useState(false);
  const [editingText, setEditingText] = useState("");

  const onQuestionChange = (str) => {
    if (str.length >= 100) {
      setError(true);
    } else {
      setError(false);
    }
    setQuestion(str);
  };

  const onEditingTextChange = (str) => {
    if (str.length >= 100) {
      setError(true);
    } else {
      setError(false);
    }
    setEditingText(str);
  };

  const { fetchPosts } = useContext(UpdatePosts);
  const postQuestion = () => {
    if (question.length >= 100 || question.length <= 0) {
      return;
    }
    const params = new URLSearchParams();
    params.append("text", question);
    const postApi = new PostApi();
    postApi
      .postQuestion(post.post_id, params)
      .then((res) => {
        setQuestion("");
        setChatLogOpen(true);
        setInputFormOpen(false);
        fetchPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const putEditedPost = () => {
    if (editingText.length >= 100 || editingText.length <= 0) {
      return;
    }
    const params = new URLSearchParams();
    params.append("text", editingText);
    const postApi = new PostApi();
    postApi
      .putPost(post.post_id, params)
      .then((res) => {
        setEditPost(!editPost);
        setInputFormOpen(false);
        fetchPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeletePost = (postId) => {
    if (!window.confirm("投稿を削除してもよろしいですか？")) return;
    setDelPostLoading(true);
    const postApi = new PostApi();
    postApi
      .deletePost(postId)
      .then((res) => {
        fetchPosts();
        window.alert("投稿を削除しました。");
      })
      .catch((err) => {
        console.log(err);
        window.alert("投稿の削除に失敗しました。");
      })
      .finally(() => {
        setDelPostLoading(false);
      });
  };

  const handleEditPost = (postId, text) => {
    setEditPost(!editPost);
    setInputFormOpen(false);
    setEditingText(text);
  };

  const user_id = localStorage.getItem("GMO2ch.user_id")
    ? localStorage.getItem("GMO2ch.user_id")
    : "";

  return (
    <Card fluid>
      {post.user_id === user_id && delPostLoading && (
        <Dimmer active inverted>
          <Loader inverted />
        </Dimmer>
      )}
      <Card.Content>
        <Comment.Group
          style={{
            margin: 0,
            padding: 0,
            maxWidth: "none",
          }}
        >
          <Comment>
            <Comment.Avatar src={post.user_image_url} />
            <Comment.Content>
              <Comment.Author as="a">{post.user_name}</Comment.Author>
              <Comment.Metadata>
                <div>{getDateLabel(post.created_at)}</div>
              </Comment.Metadata>
              {post.user_id === user_id && (
                <div className="float-right">
                  <Icon
                    name="edit"
                    link
                    onClick={() => handleEditPost(post.post_id, post.post_text)}
                    loading={delPostLoading}
                    color="grey"
                  />
                  <Icon
                    name="trash"
                    link
                    onClick={() => handleDeletePost(post.post_id)}
                    loading={delPostLoading}
                    color="grey"
                  />
                </div>
              )}
              <Comment.Text>
                {editPost ? (
                  <Form reply className="my-3">
                    <Input
                      type="text"
                      placeholder="Search..."
                      action
                      size="mini"
                      fluid
                    >
                      <textarea
                        rows={1}
                        placeholder="投稿を編集する"
                        value={editingText}
                        onChange={(event) =>
                          onEditingTextChange(event.target.value)
                        }
                        style={{
                          borderTopRightRadius: 0,
                          borderBottomRightRadius: 0,
                          resize: "none",
                        }}
                      />
                      <Button
                        type="submit"
                        size="mini"
                        primary
                        onClick={putEditedPost}
                      >
                        更新
                      </Button>
                    </Input>
                    {error && (
                      <Message color="red">
                        だめです。100字未満で入力してください。
                      </Message>
                    )}
                  </Form>
                ) : (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    className="whitespace-pre-line"
                  >
                    {post.post_text}
                  </ReactMarkdown>
                )}
              </Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
        {inputFormOpen ? (
          <Form reply className="my-3">
            <Input type="text" placeholder="Search..." action size="mini" fluid>
              <textarea
                rows={1}
                placeholder="質問内容を入力してください"
                value={question}
                onChange={(event) => onQuestionChange(event.target.value)}
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  resize: "none",
                }}
              />
              <Button type="submit" size="mini" primary onClick={postQuestion}>
                質問する
              </Button>
            </Input>
            {error && (
              <Message color="red">
                だめです。100字未満で入力してください。
              </Message>
            )}
          </Form>
        ) : (
          <div className="text-right">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="select-none" onClick={() => setInputFormOpen(true)}>
              <Icon name="talk" />
              質問する
            </a>
          </div>
        )}
        {chatLogOpen ? (
          <>
            <div className="text-center">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="select-none" onClick={() => setChatLogOpen(false)}>
                質問を閉じる <Icon name="angle up" />
              </a>
            </div>
            <Comment.Group>
              {post.question_list.map((question) => (
                <Question question={question} post={post} />
              ))}
            </Comment.Group>
          </>
        ) : (
          post.question_list.length > 0 && (
            <div className="text-center">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="select-none" onClick={() => setChatLogOpen(true)}>
                {post.question_list.length}件の質問
                <Icon name="angle down" />
              </a>
            </div>
          )
        )}
      </Card.Content>
    </Card>
  );
};

const Question = ({ question, post }) => {
  const [loading, setLoading] = useState(false);
  const { fetchPosts } = useContext(UpdatePosts);
  const [editQuestion, setEditQuestion] = useState(false);
  const [editingText, setEditingText] = useState("");
  const [error, setError] = useState(false);
  const handleDeleteQuestion = (postId, questionId) => {
    if (!window.confirm("質問を削除してもよろしいですか？")) return;
    setLoading(true);
    const postApi = new PostApi();
    postApi
      .deleteQuestion(postId, questionId)
      .then((res) => {
        fetchPosts();
        window.alert("質問を削除しました。");
      })
      .catch((err) => {
        console.log(err);
        window.alert("質問の削除に失敗しました。");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onEditingTextChange = (str) => {
    if (str.length >= 100) {
      setError(true);
    } else {
      setError(false);
    }
    setEditingText(str);
  };

  const putQuestion = () => {
    if (editingText.length >= 100 || editingText.length <= 0) return;
    setLoading(true);
    const postApi = new PostApi();
    const params = new URLSearchParams();
    params.append("text", editingText);

    postApi
      .putQuestion(post.post_id, question.question_id, params)
      .then((res) => {
        setEditQuestion(false);
        setEditingText("");
        fetchPosts();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleEditQuestion = () => {
    setEditQuestion(!editQuestion);
    setEditingText(question.text);
  };

  const user_id = localStorage.getItem("GMO2ch.user_id")
    ? localStorage.getItem("GMO2ch.user_id")
    : "";

  return (
    <>
      <Comment>
        <Dimmer active={loading} inverted />
        <Comment.Avatar src={question.user_image_url} />
        <Comment.Content>
          <Comment.Author as="a">{question.user_name}</Comment.Author>
          <Comment.Metadata>
            <div>{getDateLabel(question.created_at)}</div>
          </Comment.Metadata>
          {question.user_id === user_id && (
            <div className="float-right">
              <Icon
                name="edit"
                link
                color="grey"
                onClick={() => handleEditQuestion()}
              />
              <Icon
                name="trash"
                link
                color="grey"
                onClick={() =>
                  handleDeleteQuestion(post.post_id, question.question_id)
                }
              />
            </div>
          )}
          <Comment.Text>
            {editQuestion ? (
              <>
                <Input type="text" placeholder="Search..." action fluid>
                  <textarea
                    rows={5}
                    placeholder="投稿を編集する"
                    value={editingText}
                    onChange={(event) =>
                      onEditingTextChange(event.target.value)
                    }
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      resize: "none",
                      width: "100%",
                    }}
                  />
                  <Button
                    type="submit"
                    size="mini"
                    primary
                    onClick={putQuestion}
                  >
                    更新
                  </Button>
                </Input>
                {error && (
                  <Message color="red">
                    だめです。100字未満で入力してください。
                  </Message>
                )}
              </>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className="whitespace-pre-line"
              >
                {question.text}
              </ReactMarkdown>
            )}
          </Comment.Text>
          {question.reply_list.length <= 0 && ( // 返信がない場合のみ表示
            <ReplyForm
              postId={post.post_id}
              questionId={question.question_id}
            />
          )}
        </Comment.Content>
        <Comment.Group>
          {question.reply_list.map(
            (
              reply,
              i // 質問に対する返信
            ) => (
              <Reply
                reply={reply}
                question={question}
                post={post}
                showReplyForm={i === question.reply_list.length - 1}
              />
            )
          )}
        </Comment.Group>
      </Comment>
    </>
  );
};

const Reply = ({ reply, question, post, showReplyForm }) => {
  const [loading, setLoading] = useState(false);
  const [editReply, setEditReply] = useState(false);
  const [editingText, setEditingText] = useState("");
  const { fetchPosts } = useContext(UpdatePosts);
  const [error, setError] = useState(false);

  const handleDeleteReply = (postId, questionId, replyId) => {
    if (!window.confirm("返信を削除してもよろしいですか？")) return;
    setLoading(true);
    const postApi = new PostApi();
    postApi
      .deleteReply(postId, questionId, replyId)
      .then((res) => {
        fetchPosts();
        window.alert("返信を削除しました。");
      })
      .catch((err) => {
        console.log(err);
        window.alert("返信の削除に失敗しました。");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const putReply = () => {
    if (editingText.length >= 100 || editingText.length <= 0) return;
    setLoading(true);
    const postApi = new PostApi();
    const params = new URLSearchParams();
    params.append("text", editingText);

    postApi
      .putReply(post.post_id, question.question_id, reply.reply_id, params)
      .then((res) => {
        setEditReply(false);
        setEditingText("");
        fetchPosts();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const onEditingTextChange = (str) => {
    if (str.length >= 100) {
      setError(true);
    } else {
      setError(false);
    }
    setEditingText(str);
  };

  const handleEditReply = () => {
    setEditReply(!editReply);
    setEditingText(reply.text);
  };

  const user_id = localStorage.getItem("GMO2ch.user_id")
    ? localStorage.getItem("GMO2ch.user_id")
    : "";

  return (
    <>
      <Comment>
        <Dimmer active={loading} inverted />
        <Comment.Avatar src={reply.user_image_url} />
        <Comment.Content>
          <Comment.Author as="a">{reply.user_name}</Comment.Author>
          <Comment.Metadata>
            <div>{getDateLabel(reply.created_at)}</div>
          </Comment.Metadata>
          {reply.user_id === user_id && (
            <div className="float-right">
              <Icon
                name="edit"
                link
                color="grey"
                onClick={() => handleEditReply()}
              />
              <Icon
                name="trash"
                link
                color="grey"
                onClick={() =>
                  handleDeleteReply(
                    post.post_id,
                    question.question_id,
                    reply.reply_id
                  )
                }
              />
            </div>
          )}
          <Comment.Text>
            {editReply ? (
              <>
                <Input type="text" placeholder="Search..." action fluid>
                  <textarea
                    rows={5}
                    placeholder="投稿を編集する"
                    value={editingText}
                    onChange={(event) =>
                      onEditingTextChange(event.target.value)
                    }
                    style={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      resize: "none",
                      width: "100%",
                    }}
                  />
                  <Button type="submit" size="mini" primary onClick={putReply}>
                    更新
                  </Button>
                </Input>
                {error && (
                  <Message color="red">
                    だめです。100字未満で入力してください。
                  </Message>
                )}
              </>
            ) : (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                className="whitespace-pre-line"
              >
                {reply.text}
              </ReactMarkdown>
            )}
          </Comment.Text>
          {showReplyForm && ( // 末尾にのみ表示
            <ReplyForm
              postId={post.post_id}
              questionId={question.question_id}
            />
          )}
        </Comment.Content>
      </Comment>
    </>
  );
};

const ReplyForm = ({ postId, questionId }) => {
  const [inputFormOpen, setInputFormOpen] = useState(false);
  const [reply, setReply] = useState("");
  const [error, setError] = useState(false);

  const onReplyChange = (str) => {
    if (str.length >= 100) {
      setError(true);
    } else {
      setError(false);
    }
    setReply(str);
  };

  const { fetchPosts } = useContext(UpdatePosts);
  const postReply = () => {
    if (reply.length >= 100 || reply.length <= 0) {
      return;
    }
    const params = new URLSearchParams();
    params.append("text", reply);

    setReply("");

    const postApi = new PostApi();
    postApi
      .postReply(postId, questionId, params)
      .then((res) => {
        fetchPosts();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      {inputFormOpen ? (
        <Form reply className="my-3">
          <Input type="text" placeholder="Search..." action size="mini" fluid>
            <textarea
              rows={1}
              placeholder="返信内容を入力してください"
              onChange={(event) => onReplyChange(event.target.value)}
              value={reply}
              style={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                resize: "none",
                height: "3em",
              }}
            />
            <Button type="submit" size="mini" primary onClick={postReply}>
              返信する
            </Button>
          </Input>
          {error && (
            <Message color="red">
              だめです。100字未満で入力してください。
            </Message>
          )}
        </Form>
      ) : (
        <Comment.Actions>
          <Comment.Action onClick={() => setInputFormOpen(true)}>
            返信する
          </Comment.Action>
        </Comment.Actions>
      )}
    </>
  );
};
