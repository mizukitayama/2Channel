export const SideBar = (props) => {
  const { onClick } = props;
  return (
    <div>
      <h1>SideBarです</h1>
      <button onClick={onClick}>count up</button>
    </div>
  );
};
