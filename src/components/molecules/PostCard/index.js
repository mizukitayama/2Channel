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

export const PostCard = ({ post }) => {
  const [open, setOpen] = useState(false);
  return (
    <Card fluid>
      <Card.Content>
        <Comment.Group>
          <Comment>
            {/* <Comment.Avatar src="/images/avatar/small/matt.jpg" /> */}
            <Comment.Content>
              <Comment.Author as="a">Matt</Comment.Author>
              <Comment.Metadata>
                <div>Today at 5:42PM</div>
              </Comment.Metadata>
              <Comment.Text>How artistic!</Comment.Text>
            </Comment.Content>
          </Comment>
        </Comment.Group>
        {open ? (
          <>
            <p style={{ textAlign: "center" }}>
              <span onClick={() => setOpen(false)}>
                質問を閉じる <Icon name="angle up" />
              </span>
            </p>
            <Comment.Group>
              <Comment>
                {/* <Comment.Avatar src="/images/avatar/small/matt.jpg" /> */}
                <Comment.Content>
                  <Comment.Author as="a">Matt</Comment.Author>
                  <Comment.Metadata>
                    <div>Today at 5:42PM</div>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Comment>
                {/* <Comment.Avatar src="/images/avatar/small/elliot.jpg" /> */}
                <Comment.Content>
                  <Comment.Author as="a">Elliot Fu</Comment.Author>
                  <Comment.Metadata>
                    <div>Yesterday at 12:30AM</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    <p>
                      This has been very useful for my research. Thanks as well!
                    </p>
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
                <Comment.Group>
                  <Comment>
                    {/* <Comment.Avatar src="/images/avatar/small/jenny.jpg" /> */}
                    <Comment.Content>
                      <Comment.Author as="a">Jenny Hess</Comment.Author>
                      <Comment.Metadata>
                        <div>Just now</div>
                      </Comment.Metadata>
                      <Comment.Text>
                        Elliot you are always so right :)
                      </Comment.Text>
                      <Comment.Actions>
                        <Comment.Action>Reply</Comment.Action>
                      </Comment.Actions>
                    </Comment.Content>
                  </Comment>
                </Comment.Group>
              </Comment>

              <Comment>
                {/* <Comment.Avatar src="/images/avatar/small/joe.jpg" /> */}
                <Comment.Content>
                  <Comment.Author as="a">Joe Henderson</Comment.Author>
                  <Comment.Metadata>
                    <div>5 days ago</div>
                  </Comment.Metadata>
                  <Comment.Text>
                    Dude, this is awesome. Thanks so much
                  </Comment.Text>
                  <Comment.Actions>
                    <Comment.Action>Reply</Comment.Action>
                  </Comment.Actions>
                </Comment.Content>
              </Comment>

              <Form reply>
                <Form.TextArea />
                <Button
                  content="Add Reply"
                  labelPosition="left"
                  icon="edit"
                  style={{ backgroundColor: "#005BAB", color: "white"}}
                />
              </Form>
            </Comment.Group>
          </>
        ) : (
          // <Button
          //   content="質問を見る"
          //   onClick={() => {
          //     setOpen(true);
          //   }}
          // />
          <p style={{ textAlign: "center" }}>
            <span onClick={() => setOpen(true)}>
              1件の質問
              <Icon name="angle down" />
            </span>
          </p>
        )}
      </Card.Content>
    </Card>
  );
};
