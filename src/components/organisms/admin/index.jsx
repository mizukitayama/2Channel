import { ButtonComponentWithFunction } from "../../atoms/ButtonComponentWithFunction";
import { CategoryCurrentList } from "../../molecules/Category/currentList";
import { Container } from "semantic-ui-react";

export const Admin = ({ categories }) => {
  const categories2 = ["adfadf", "adfasdf", "asdfadf", "heh", "qre"];
  function addCategory() {
    console.log("Todo");
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
            <CategoryCurrentList categories={categories2} />
            <div className="mx-auto">
              <ButtonComponentWithFunction
                value="+ カテゴリーを追加"
                onClick={addCategory}
              />
            </div>
          </div>
          <div className="grid gap-[16px]">
            <div className="text-xl font-semibold">ユーザー追加</div>
            <div>
              新しくSlackワークスペースに入った人を一括でGMO 2channelに追加できます。新しいユーザーは追加されてからGMO 2channelをつかえるようになります
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
