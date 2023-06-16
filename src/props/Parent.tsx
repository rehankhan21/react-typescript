import { Child, ChildAsFC } from "./Child";

const Parent = () => {
  //return <Child color="red" onClick={() => console.log("Clicked")} />;
  return (
    <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
      {<h2>yo</h2>}
    </ChildAsFC>
  );
};

export default Parent;
