// 1) Import ReactDOM library
import ReactDOM from "react-dom/client";
//import GuestList from "./state/guest-list";
//import UserSearch from "./state/user-search";
//import EventComponent from "./events/event-component";
import UserSearch from "./refs/user-search";

// 2) Get a reference to the div with ID root
const el = document.getElementById("root");

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el!);

// 4) Create a component
const App = () => {
  return (
    <div>
      <UserSearch />
    </div>
  );
};

// 5) Show the component on the screen
root.render(<App />);
