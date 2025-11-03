import { useState } from "react";

export const useForm = (initialValues) => {
    const [form, setForm] = useState(initialValues);

    const handleChange = (e) => {    //"e" es una versión simplificada de evento
        const {name, value} = e.target

        setFormState({
            ...formState, 
            [name]:value,
        });
    }

    const handleReset = () => {
        setFormState(initialValue);
    }
    return{
        form: formState,
        handleChange, 
        handleReset,
    }
}