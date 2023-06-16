import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState("");
  // typescript infers that guest is an array of type never
  // ts thinks this array will forever be empty
  //const [guests, setGuests] = useState([] as string[]);
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
