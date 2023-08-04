import { AuthApi } from "../../../api/AuthApi";
import { ButtonComponentWithFunction } from "../../atoms/ButtonComponentWithFunction";
import { useState } from "react";
import { Modal, Button, Icon, Loader } from "semantic-ui-react";

export const InvitePeople = () => {
  const [isUsersAddModalOpen, setIsUsersAddModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const invitePeople = () => {
    const authApi = new AuthApi();
    setIsLoading(true);
    authApi
      .update()
      .then((res) => {
        setIsLoading(false);
        setIsUsersAddModalOpen(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="grid gap-[16px]">
      <div className="text-xl font-semibold">ユーザー追加</div>
      <div>
        新しくSlackワークスペースに入った人を一括でGMO
        2channelに追加できます。新しいユーザーは追加されてからGMO
        2channelを利用できるようになります。
      </div>
      <div className="mx-auto">
        <Modal
          basic
          onClose={() => setIsUsersAddModalOpen(false)}
          onOpen={() => setIsUsersAddModalOpen(true)}
          open={isUsersAddModalOpen}
          size="small"
          trigger={
            <Button style={{ backgroundColor: "#005BAB", color: "white" }}>
              ユーザーを追加
            </Button>
          }
        >
          {isLoading ? (
            <Loader active inline="centered" />
          ) : (
            <Modal.Content>
              <div className="grid gap-[32px] flex justify-center">
                <div className="text-center">
                  <Icon name="add user" size="huge" />
                </div>
                <div className="ml-[8px]">
                  前回ボタンを押した時にはワークスペースに参加していなかったユーザーへDMで招待が行きます。
                </div>
                <div className="mx-auto">
                  <ButtonComponentWithFunction
                    value="GMO 2channelにユーザーを追加"
                    onClick={invitePeople}
                  />
                </div>
              </div>
            </Modal.Content>
          )}
        </Modal>
      </div>
    </div>
  );
};
