import { useState } from "react";
import { Login } from "../components/Login.jsx";
import { Register } from "../components/Register.jsx";
import FirstApp from "../components/FirstApp.jsx";

export const App = () => {
  const [user, setUser]= useState("");
  const [showTask, setShowtask] = useState("");

  return (
    <div className="App">
      <div className="Bienvenida">
        <h1>Bienvenido</h1>
        <button onClick={() => setShowtask("task1")}>Tarea 1</button>
        <button onClick={() => setShowtask("task2")}>Tarea 2</button>
        <button onClick={() => setShowtask("task3")}>Tarea 3</button>
        </div>
    </div>
  )
}

export default App
