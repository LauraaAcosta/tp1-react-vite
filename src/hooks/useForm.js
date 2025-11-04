import { useState } from "react";

export const useForm = (initialValues = {}) => {
  const [form, setForm] = useState(initialValues);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    
    setForm({ 
      ...form,
      [name]: value,
    });
  };

  const handleReset = () => {
    setForm(initialValues);
  };

  return {
    form,
    handleChange,
    handleReset,
  };
};