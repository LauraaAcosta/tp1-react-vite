import { useForm } from "../hooks/useForm";

export const Register = () => {
    const {from, handleChange, handleReset} = useForm ({
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",  
    });
     const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos de registros enviados:', from); 
        handleReset();
     };
     return (
        <div className= "form-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <label>Username:</label>
                <input
                type="text"
                name="username"
                placeholder="Usuario"
                value={username}
                onChange={handleChange}
                required
                />

                <label>Email:</label>
                <input
                type="email"
                name="email"
                placeholder="Pon tu email"
                value={email}
                onChange={handleChange}
                required
                />

                <label>Nombre:</label>
                <input
                type="text"
                name="firstname"
                placeholder="Nombre(s)"
                value={firstname}
                onChange={handleChange}
                required
                />

                <label>Apellido:</label>
                <input
                type="text"
                name="lastname"
                placeholder="Apellido(s)"
                value={lastname}
                onChange={handleChange}
                required
                />                

                <button type= "submit">Registrarse</button>
            </form>
        </div>
     );
};