import { Icon, Table } from "semantic-ui-react";
import { PostApi } from "../../../api/PostApi";
import { useState, useEffect,useContext } from "react";
import { CategoryApi } from "../../../api/CategoryApi";
import { UpdateCategories } from "../../../pages/adminPage";

export const CategoryCurrentList = ({ categories }) => {
  const [postCounts, setPostCounts] = useState({});
  const { fetchCategories } = useContext(UpdateCategories)
  const categoryKeys = Object.keys(categories);

  const postApi = new PostApi();
  useEffect(() => {
    const counts = {};

    Promise.all(
      categoryKeys.map((category) => {
        return postApi
          .getPosts({ category })
          .then((res) => {
            counts[category] = res.length;
          })
          .catch((err) => {
            console.error(err);
            counts[category] = 0;
          });
      })
    )
    .then(() => setPostCounts(counts));
  }, [categories]);


  const categoryApi = new CategoryApi()
  const deleteCategories = (key) => {
    console.log(key)
    const params = new URLSearchParams();
    params.append("category_id", key);
    categoryApi.deleteCategory(key)
    .then((res) => {
      fetchCategories()
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <>
      <div>
        <Table celled textAlign="center" unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>カテゴリー名</Table.HeaderCell>
              <Table.HeaderCell>投稿数</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {categoryKeys.map((category) => {
              return (
                <Table.Row>
                  <Table.Cell>
                  <div onClick={() => deleteCategories(category)}>
                    <Icon name="trash" size="small" />  {categories[category].category_name}
                    </div>
                    </Table.Cell>
                  <Table.Cell>{postCounts[category] ? postCounts[category] : 0}</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};
