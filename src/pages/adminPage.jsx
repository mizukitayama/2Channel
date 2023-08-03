import { Header } from "../components/organisms/header";
import { useEffect, useState } from "react";
import { CategoryApi } from "../api/CategoryApi";
import { Admin } from "../components/organisms/admin";
import React from "react"

export const UpdateCategories = React.createContext({});
export const AdminPage = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = () => {
    const categoryApi = new CategoryApi();
    categoryApi
      .getCategories()
      .then((res) => {
        setCategories(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    fetchCategories()
  }, []);

  return (
    <>
      <div>
        <div className="mb-[32px] mx-[32px] container">
          <Header />
          <UpdateCategories.Provider value={{ fetchCategories }}>
            <Admin categories={categories} />
          </UpdateCategories.Provider>
        </div>
      </div>
    </>
  );
};
