import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
import unicapImage from '../../images/unicap.png';

const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            const expiration = localStorage.getItem('expiration');
            if (expiration && new Date(expiration) > new Date()) {
                navigate('/');
            } else {
                localStorage.removeItem('accessToken');
                localStorage.removeItem('expiration');
                navigate('/login');
            }
        }
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");  
        try {
            const response = await axios.post("https://localhost:44365/api/Auth/Login", { 
                login,
                password
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (response.status === 200) {
                const data = response.data;
                const token = data.collections.accessToken;
                const expiration = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
                localStorage.setItem('accessToken', token);
                localStorage.setItem('expiration', expiration.toISOString());
                console.log(token);
                navigate("/PaginaInicial");
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setError("Erro ao fazer login. Por favor, tente novamente.");
        } finally {
            setLoading(false);
        }
    };

    const token = localStorage.getItem('accessToken'); // Obtém o token do localStorage

    const axiosInstance = axios.create({
        baseURL: 'https://localhost:44365/api/', // Define a URL base para todas as solicitações
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}` // Inclui o token no cabeçalho de autorização
        }
    });

    return (
        <div className="login-container" style={{ backgroundImage: `url(${unicapImage})` }}>
            <div className="login-box">
                <h1 className="Title">Login</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label className="TextContent" htmlFor="login">Email</label>
                        <input
                            type="email"
                            id="login"
                            name="login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label className="TextContent" htmlFor="password">Senha</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button" disabled={loading}>
                        {loading ? "Carregando..." : "Login"}
                    </button>
                    <a link to= "/"></a>
                </form>
            </div>
        </div>
    );
};

export default Login;