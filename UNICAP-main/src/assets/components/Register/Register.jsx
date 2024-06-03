import React, { useState } from 'react';
import axios from 'axios';

function RegisterUser() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState(1); // Assume que o cargo padrão é 1

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      nome,
      email,
      cargo,
    };

    try {
        const response = await axios.post('https://localhost:44365/api/User/CreateUser', userData);
        console.log('Usuário criado com sucesso:', response.data);
      alert('Usuário criado com sucesso!');
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      alert('Erro ao criar usuário!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Cargo:</label>
        <input
          type="number"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          required
        />
      </div>
      <button type="submit">Registrar Usuário</button>
    </form>
  );
}

export default RegisterUser;
