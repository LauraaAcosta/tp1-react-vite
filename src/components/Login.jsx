import { useForm } from "../hooks/useForm";

export const Login = ({ onLogin }) => {
  
  const { form, handleChange, handleReset } = useForm({
    username: "",
    password: "",
  });

  const { username, password } = form;

  const handleSubmit = (evento) => {
    evento.preventDefault();
    
    onLogin(username); 
    handleReset();
    
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}> 
        <label>Username:</label>
        <input
          type="text"
          name="username"
          placeholder="username aqui"
          value={username}
          onChange={handleChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="password aqui"
          value={password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};