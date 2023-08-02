import { Header } from "../components/organisms/header";
import { useEffect, useState } from "react";
import { CategoryApi } from "../api/CategoryApi";
import { Admin } from "../components/organisms/admin";

export const AdminPage = () => {
	const [categories, setCategories] = useState(["サウナ", "食べ物", "テック"]);
  useEffect(() => {
    const categoryApi = new CategoryApi();
    categoryApi
      .getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <div className="mb-[32px] mx-[32px] container">
          <Header />
          <Admin categories={categories} />
        </div>
      </div>
    </>
  );
};
