// src/views/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/doctors/login', credentials)
      .then(response => {
        // Manejar el inicio de sesión exitoso
      })
      .catch(error => {
        console.error('Hubo un error al iniciar sesión', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChange} required />
      <input type="password" name="password" placeholder="Contraseña" value={credentials.password} onChange={handleChange} required />
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
};

export default Login;
