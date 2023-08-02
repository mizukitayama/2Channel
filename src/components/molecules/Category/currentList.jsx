import { Table } from "semantic-ui-react";

export const CategoryCurrentList = ({ categories }) => {
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
            {categories.map((category) => {
              return (
                <Table.Row>
                  <Table.Cell>{category}</Table.Cell>
                  <Table.Cell>3</Table.Cell>
                </Table.Row>
              );
            })}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};
