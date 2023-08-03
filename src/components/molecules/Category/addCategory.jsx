import { ButtonComponentWithFunction } from "../../atoms/ButtonComponentWithFunction";
import { CategoryCurrentList } from "../../molecules/Category/currentList";
import { Modal, Button, Input, Loader, Message } from "semantic-ui-react";
import { useState } from "react";
import { CategoryApi } from "../../../api/CategoryApi";

export const AddCategory = ({ categories }) => {
  const [newCategory, setNewCategory] = useState("");
  const [isCategoryAddModalOpen, setIsCategoryAddModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  function onChangeNewCategory(category) {
    console.log(newCategory);
    if (category.length >= 10) {
      setError(true);
    } else {
      setError(false);
    }
    setNewCategory(category);
  }

  function addCategory() {
    if (newCategory.length >= 10) {
      return;
    }
		setError(false)
    setIsLoading(true);
    setNewCategory("");
    categories.push(newCategory);
    if (newCategory.length >= 10 || newCategory.length <= 0) {
      return;
    }
    const params = new URLSearchParams();
    params.append("text", newCategory);
    const categoryApi = new CategoryApi();
    setNewCategory("");
    categoryApi
      .postCategory(params)
      .then((res) => {
        setIsLoading(false);
        setIsCategoryAddModalOpen(false);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }
  return (
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
            <Button style={{ backgroundColor: "#005BAB", color: "white" }}>
              カテゴリーを追加
            </Button>
          }
        >
          {isLoading ? (
            <Loader active inline="centered" />
          ) : (
            <Modal.Content>
              <div className="grid gap-[32px] flex justify-center">
                <div className="text-center">
                  カテゴリーを10文字以内で入力してください。
                </div>
                <div>
                  <Input
                    placeholder="カテゴリー名"
                    onChange={(event) =>
                      onChangeNewCategory(event.target.value)
                    }
                    className="w-[200px]"
                    value={newCategory}
                  />
                  <ButtonComponentWithFunction
                    value="+ 追加"
                    onClick={addCategory}
										/>
										{error && (
											<Message color="red">
												だめです。10字以内で入力してください。
											</Message>
										)}
                </div>
              </div>
            </Modal.Content>
          )}
        </Modal>
      </div>
    </div>
  );
};
