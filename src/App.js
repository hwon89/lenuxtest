import axios from "axios";
import { useState } from "react";
import "./App.css";
import PrintMyname from "./components/PrintMyName";
function App() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get("http://192.168.0.14:5000/user");
    setUsers(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getUsers}>getUsers</button>
        {users.map((el) => (
          <PrintMyname name={el.name}></PrintMyname>
        ))}
      </header>
    </div>
  );
}
export default App;
