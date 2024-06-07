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
    const [nome, setUserNome] = useState(null);
    const [editingArticle, setEditingArticle] = useState(null);

    useEffect(() => {
        const nome = localStorage.getItem('userNome');
        if(nome) {
            setUserNome(nome);
        }
    }, []);

    useEffect(() => {
        const cargo = localStorage.getItem('userCargo');
        if (cargo) {
            setUserCargo(parseInt(cargo)); 
        }
    }, []);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`https://cursoapi.azurewebsites.net/api/Article/GetAllArticles`);
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
            const response = await fetch(`https://cursoapi.azurewebsites.net/api/Article/CreateArticle`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    titulo: titulo,
                    descricao: descricao,
                    nome: nome,
                })
            });
            const data = await response.json();
            console.log(data); 
            setArticles([...articles, { id: data.id, titulo: titulo, descricao: descricao, nome: nome }]); 
            setShowForm(false); 
        } catch (error) {
            console.error("Erro ao criar artigo:", error);
        }
    };

    const handleEditArticle = async (article) => {
        try {
            const response = await fetch(`https://cursoapi.azurewebsites.net/api/Article/UpdateArticle`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    id: article.id,
                    titulo: titulo,
                    descricao: descricao,
                    nome: nome,
                })
            });
            const data = await response.json();
            console.log(data); 
            setArticles(articles.map((item) => (item.id === article.id ? { ...item, titulo: titulo, descricao: descricao } : item)));
            setShowForm(false);
            setEditingArticle(null);
        } catch (error) {
            console.error("Erro ao editar artigo:", error);
        }
    };

    const handleDeleteArticle = async (id) => {
        try {
            const response = await fetch(`https://cursoapi.azurewebsites.net/api/Article/DeleteArticle?Id=${id}`, {
                method: "DELETE",
            });
            if (response.ok) {
                setArticles(articles.filter((article) => article.id !== id));
                console.log("Artigo excluído com sucesso!");
            } else {
                console.error("Erro ao excluir artigo:", response.statusText);
            }
        } catch (error) {
            console.error("Erro ao excluir artigo:", error);
        }
    };
    

    const handleEditClick = (article) => {
        setEditingArticle(article);
        setTitulo(article.titulo);
        setDescricao(article.descricao);
        setShowForm(true);
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
                        {editingArticle ? (
                            <button onClick={() => handleEditArticle(editingArticle)}>Salvar</button>
                        ) : (
                            <button onClick={handleCreateArticle}>Criar</button>
                        )}
                        <button onClick={() => { setShowForm(false); setEditingArticle(null); }}>Fechar</button>
                    </div>
                )}
                {loading ? (
                    <p>Carregando artigos...</p>
                ) : (
                    articles.collections.length === 0 ? (
                        <p>Nenhum artigo encontrado.</p>
                    ) : (
                        articles.map((article, index) => (
                            <div key={index} className="article">
                                <h2>{article.titulo}</h2>
                                <p>{article.descricao}</p>
                                <p>Autor: {nome}</p>
                                {userCargo === 3 && (
                                    <div>
                                        <button onClick={() => handleEditClick(article)}>Editar</button>
                                        <button onClick={() => handleDeleteArticle(article.id)}>Excluir</button>
                                    </div>
                                )}
                            </div>
                        ))
                    )
                )}
            </div>
        </div>
    );
};

export default Home;
