import "../Home/Home.css";
import React, { useState, useEffect } from "react";
import Sidebar from '../../components/SideBar/Sidebar.jsx';

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userCargo, setUserCargo] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [titulo, setTitulo] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        const cargo = localStorage.getItem('userCargo');
        if (cargo) {
            setUserCargo(parseInt(cargo)); 
        }
    }, []);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch("https://localhost:44365/api/Article/GetAllArticles");
                const data = await response.json();
                setArticles(data.collections.itens);
                setLoading(false);
            } catch (error) {
                console.error("Erro ao buscar artigos:", error);
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const handleCreateArticle = async () => {
        try {
            const response = await fetch("https://localhost:44365/api/Article/CreateArticle", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    titulo: titulo,
                    descricao: descricao,
                })
            });
            const data = await response.json();
            console.log(data); 
            setArticles([...articles, { titulo: titulo, descricao: descricao }]); 
            setShowForm(false); 
        } catch (error) {
            console.error("Erro ao criar artigo:", error);
        }
    };

    return (
        <div className="home-container">
            <Sidebar />
            
            <div className="articles-container">
                <div className="article-box">
                    <p>Artigos</p>
                    {userCargo === 3 && (
                        <button className="special-button" onClick={() => setShowForm(true)}>Criar Artigo</button>
                    )}
                </div>
                {showForm && (
                    <div className="article-form">
                        <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                        <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                        <button onClick={handleCreateArticle}>Criar</button>
                    </div>
                )}
                {loading ? (
                    <p>Carregando artigos...</p>
                ) : (
                    articles.length === 0 ? (
                        <p>Nenhum artigo encontrado.</p>
                    ) : (
                        articles.map((article, index) => (
                            <div key={index} className="article">
                                <h2>{article.titulo}</h2>
                                <p>{article.descricao}</p>
                            </div>
                        ))
                    )
                )}
            </div>
        </div>
    );
};

export default Home;
