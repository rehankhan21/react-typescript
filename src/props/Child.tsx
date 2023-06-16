interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

// you can use object destructing, to get the exact props we need
// TS doesnt know that we are defining a react component
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// this tells TS that we are defining a react component
// this allows us to use built in React methods like propTypes and contextTypes
// also tells TS that the react component will get props of type ChildProps
// automatically assumes it might have children props.
export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
