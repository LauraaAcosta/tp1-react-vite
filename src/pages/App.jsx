import { useState } from "react";
import { Login } from "../components/Login.jsx";
import { Register } from "../components/Register.jsx";
import FirstApp from "../components/FirstApp.jsx";
import { FetchSimpsonsApi } from "./FetchSimpsonsApi.jsx";

export function App() {
  const [user, setUser] = useState("");
  const [showTask, setShowtask] = useState("");

  const handleLogin = (username) => {
    setUser(username);
  };
  
  const handleLogout = () => {
    setUser("");
  };
  
  return (
    <div className="App">
      <div className="Bienvenida">
        <h1>Bienvenido</h1>
        <button onClick={() => setShowtask("task1")}>Tarea 1</button>
        <button onClick={() => setShowtask("task2")}>Tarea 2</button>
        <button onClick={() => setShowtask("task3")}>Tarea 3</button>
      </div>
      
      {/* Tarea 1 */}
      {showTask === "task1" && <FirstApp />}

      {/* Tarea 2: Formularios y Login */}
      {showTask === "task2" && (
        <div>
          <h1>Esta es la tarea 2</h1>
          {user ? (
            // Si hay sesión iniciada
            <div>
              <h2>Hola de nuevo {user}</h2>
              <button onClick={handleLogout}>Logout</button>
            </div>
          ) : (
            // Si no hay sesión iniciada (Formularios)
            <>
              <Login onLogin={handleLogin} />
              <Register />
            </>
          )}
        </div>
      )}

      {/* Tarea 3: API */}
      {showTask === "task3" && <FetchSimpsonsApi />}
    </div>
  );
}

export default App;