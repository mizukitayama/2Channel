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
import { PostApi } from "../../../api/PostApi";
import { UpdatePosts } from "../../../pages/home";

export const PostCard = (props) => {
  const { post } = props;
  const [chatLogOpen, setChatLogOpen] = useState(false);
  const [inputFormOpen, setInputFormOpen] = useState(false);
  const [question, setQuestion] = useState("");
  const [error, setError] = useState(false);
  const [delPostLoading, setDelPostLoading] = useState(false);

  const onQuestionChange = (str) => {
    if (str.length >= 100) {
      setError(true);
    } else {
      setError(false);
    }
    setQuestion(str);
  };

  const getDateLabel = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hour = dateObj.getHours();
    const minute = ("00" + dateObj.getMinutes()).slice(-2);
    return `${year}/${month}/${day} ${hour}:${minute}`;
  };

  // const { posts, setPosts } = useContext(UpdatePosts);
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
      })
      .finally(() => {
        setDelPostLoading(false);
      });
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
                    name="trash"
                    link
                    onClick={() => handleDeletePost(post.post_id)}
                    loading={delPostLoading}
                    color="grey"
                  />
                </div>
              )}
              <Comment.Text>
                <div className="whitespace-pre">{post.post_text}</div>
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
                <Comment>
                  <Comment.Avatar src={question.user_image_url} />
                  <Comment.Content>
                    <Comment.Author as="a">{question.user_name}</Comment.Author>
                    <Comment.Metadata>
                      <div>{getDateLabel(question.created_at)}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p className="whitespace-pre">{question.text}</p>
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
                        <Comment>
                          <Comment.Avatar src={reply.user_image_url} />
                          <Comment.Content>
                            <Comment.Author as="a">
                              {reply.user_name}
                            </Comment.Author>
                            <Comment.Metadata>
                              <div>{getDateLabel(reply.created_at)}</div>
                            </Comment.Metadata>
                            <Comment.Text>
                              <div className="whitespace-pre">{reply.text}</div>
                            </Comment.Text>
                            {i === question.reply_list.length - 1 && ( // 末尾にのみ表示
                              <ReplyForm
                                postId={post.post_id}
                                questionId={question.question_id}
                              />
                            )}
                          </Comment.Content>
                        </Comment>
                      )
                    )}
                  </Comment.Group>
                </Comment>
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
