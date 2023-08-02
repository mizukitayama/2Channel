import { useState } from "react";
import { Comment, Form, Button, Card, Icon, Input } from "semantic-ui-react";

export const PostCard = (props) => {
  const { post } = props;
  const [chatLogOpen, setChatLogOpen] = useState(false);
  const [inputFormOpen, setInputFormOpen] = useState(false);

  const getDateLabel = (date) => {
    const dateObj = new Date(date);
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth() + 1;
    const day = dateObj.getDate();
    const hour = dateObj.getHours();
    const minute = ("00" + dateObj.getMinutes()).slice(-2);
    return `${year}/${month}/${day} ${hour}:${minute}`;
  };

  return (
    <Card fluid>
      <Card.Content>
        <Comment.Group>
          <Comment>
            <Comment.Content>
              <Comment.Author as="a">{post.user_name}</Comment.Author>
              <Comment.Metadata>
                <div>{getDateLabel(post.created_at)}</div>
              </Comment.Metadata>
              <Comment.Text>{post.post_text}</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
        {inputFormOpen ? (
          <Form reply className="my-3">
            <Input type="text" placeholder="Search..." action size="mini" fluid>
              <input placeholder="質問内容を入力してください" />
              <Button type="submit" size="mini" primary>
                質問する
              </Button>
            </Input>
          </Form>
        ) : (
          <div className="text-right">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="select-none" onClick={() => setInputFormOpen(true)}>
              質問する
              <Icon name="talk" />
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
                <Comment key={question.id}>
                  <Comment.Content>
                    <Comment.Author as="a">社員の人</Comment.Author>
                    <Comment.Metadata>
                      <div>{getDateLabel(question.created_at)}</div>
                    </Comment.Metadata>
                    <Comment.Text>
                      <p>{question.question_text}</p>
                    </Comment.Text>
                    {question.reply_list.length <= 0 && ( // 返信がない場合のみ表示
                      <ReplyForm />
                    )}
                  </Comment.Content>
                  <Comment.Group>
                    {question.reply_list.map(
                      (
                        reply,
                        i // 質問に対する返信
                      ) => (
                        <Comment key={reply.id}>
                          <Comment.Content>
                            <Comment.Author as="a">社員の人</Comment.Author>
                            <Comment.Metadata>
                              <div>{getDateLabel(reply.created_at)}</div>
                            </Comment.Metadata>
                            <Comment.Text>{reply.reply_text}</Comment.Text>
                            {i === question.reply_list.length - 1 && ( // 末尾にのみ表示
                              <ReplyForm />
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

const ReplyForm = () => {
  const [inputFormOpen, setInputFormOpen] = useState(false);
  return (
    <>
      {inputFormOpen ? (
        <Form reply className="my-3">
          <Input type="text" placeholder="Search..." action size="mini" fluid>
            <input placeholder="返信内容を入力してください" />
            <Button type="submit" size="mini" primary>
              返信する
            </Button>
          </Input>
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
