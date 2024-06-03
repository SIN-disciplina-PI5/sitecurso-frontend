import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Register/Register.css"; 

function RegisterUser() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const userData = {
      nome,
      email,
      cargo,
    };

    try {
        const response = await axios.post('https://localhost:44365/api/User/CreateUser', userData);
        console.log('Usuário criado com sucesso:', response.data);
        alert('Usuário criado com sucesso!');
        navigate('/login'); 
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      setError('Erro ao criar usuário. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="register-title">Registro</h1>
        {error && <p className="register-error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="register-form-group">
            <label className="register-content" htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="register-form-group">
            <label className="register-content" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="register-form-group">
            <label className="register-content" htmlFor="cargo">Cargo</label>
            <input
              type="number"
              id="cargo"
              value={cargo}
              onChange={(e) => setCargo(e.target.value)}
              required
            />
          </div>
          <div className="register-form-group">
            <button type="button" className="register-button" onClick={handleGoToLogin}>Voltar ao Login</button>
            <button type="submit" className="register-button" disabled={loading}>
              {loading ? "Carregando..." : "Registrar Usuário"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterUser;
