import { useState, useRef, useEffect } from "react";

const users = [
  { name: "sarah", age: 20 },
  { name: "max", age: 20 },
  { name: "dan", age: 20 },
];

const UserSearch: React.FC = () => {
  //TS doesnt know if the ref is going to exist so we give it a defualt value of null
  // can also just put <any> but putting the actual type is better
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  useEffect(() => {
    // type guard
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onClick = () => {
    // .find goes through the array and calls the function attached to it 1 by 1 for every user
    const foundUser = users.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      User Search
      <input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onClick}>Find User</button>
      {/* only access user.name if user exist */}
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
