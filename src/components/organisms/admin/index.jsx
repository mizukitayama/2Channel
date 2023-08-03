import { useState } from "react";
import {
  Container,
} from "semantic-ui-react";
import { InvitePeople } from "../../molecules/InvitePeople";
import { AddCategory } from "../../molecules/Category/addCategory";

export const Admin = ({ categories }) => {
  return (
    <>
      <Container text className="pb-[40px]">
        <div className="grid gap-[40px]">
          <div className="text-2xl h-[40px] border-b border-blue">
            管理者ページ
          </div>
          <AddCategory categories={categories}/>
          <InvitePeople />
        </div>
      </Container>
    </>
  );
};
