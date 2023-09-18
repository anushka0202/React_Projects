import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  // const [people, setPeople] = useState([]);

  const users = [
    {
      name: "Anushka",
      age: 23,
    },
    {
      name: "Anushka Raj",
      age: 23,
    },
  ];

  return (
    <div>
      <Header />
      <AddUser />
      <UserList users={users} />
    </div>
  );
}

export default App;
