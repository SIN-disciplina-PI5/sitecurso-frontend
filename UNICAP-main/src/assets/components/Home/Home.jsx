import "../Home/Home.css";
import React, { useState, useEffect } from "react";
import Sidebar from '../../components/SideBar/Sidebar.jsx';

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return (
        <div className="home-container">
            <Sidebar />
            
            <div className="articles-container">
            <p>Artigos</p>
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
