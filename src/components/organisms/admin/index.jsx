import { useState } from "react";
import { ButtonComponentWithFunction } from "../../atoms/ButtonComponentWithFunction";
import { ButtonComponent } from "../../atoms/ButtonComponent";
import { CategoryCurrentList } from "../../molecules/Category/currentList";
import {
  Container,
  Modal,
  Button,
  Header,
  Icon,
  Input,
} from "semantic-ui-react";

export const Admin = ({ categories }) => {
  const [isCategoryAddModalOpen, setIsCategoryAddModalOpen] = useState(false);
  const [isUsersAddModalOpen, setIsUsersAddModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState("");
  function addCategory() {
    setIsCategoryAddModalOpen(false);
    setNewCategory("");
    categories.push(newCategory)
    console.log("Todo");
    console.log(newCategory);
  }

  function invitePeople() {
    console.log("Todo");
  }
  return (
    <>
      <Container text className="pb-[40px]">
        <div className="grid gap-[40px]">
          <div className="text-2xl h-[40px] border-b border-blue">
            管理者ページ
          </div>
          <div className="grid gap-[16px]">
            <div className="text-xl font-semibold">カテゴリーの編集</div>
            <CategoryCurrentList categories={categories} />
            <div className="mx-auto">
              <Modal
                basic
                onClose={() => setIsCategoryAddModalOpen(false)}
                onOpen={() => setIsCategoryAddModalOpen(true)}
                open={isCategoryAddModalOpen}
                size="small"
                trigger={
                  <Button
                    style={{ backgroundColor: "#005BAB", color: "white" }}
                  >
                    カテゴリーを追加
                  </Button>
                }
              >
                <Modal.Content>
                  <div className="grid gap-[16px] flex justify-center">
                    <Input
                      placeholder="カテゴリー名"
                      onChange={(event) => setNewCategory(event.target.value)}
                      className="w-[200px]"
                      value={newCategory}
                    />
                    <ButtonComponentWithFunction
                      value="+ カテゴリーを追加"
                      onClick={addCategory}
                    />
                  </div>
                </Modal.Content>
              </Modal>
            </div>
          </div>
          <div className="grid gap-[16px]">
            <div className="text-xl font-semibold">ユーザー追加</div>
            <div>
              新しくSlackワークスペースに入った人を一括でGMO
              2channelに追加できます。新しいユーザーは追加されてからGMO
              2channelをつかえるようになります
            </div>
            <div className="mx-auto">
              <ButtonComponentWithFunction
                value="GMO 2channelにユーザーを追加"
                onClick={invitePeople}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
