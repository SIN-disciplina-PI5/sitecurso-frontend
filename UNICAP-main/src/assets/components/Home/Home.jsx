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
    const [userName, setUserNome] = useState(null);
    const [id, setUserId] = useState(null);
    const [editingArticle, setEditingArticle] = useState(null);

    useEffect(() => {
        const userName = localStorage.getItem('userName');
        if(userName) {
            setUserNome(userName);
        }
    }, []);

    useEffect(() => {
        const cargo = localStorage.getItem('userCargo');
        if (cargo) {
            setUserCargo(parseInt(cargo)); 
        }
    }, []);

    useEffect(() => {
        const id = localStorage.getItem('id');
        if (id) {
            setUserId(parseInt(id)); 
        }
    }, []);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch(`https://cursoapi.azurewebsites.net/api/Article/GetAllArticles`);
                const data = await response.json();
                setArticles(data.collections);
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
                    userId: id
                })
            });
            const data = await response.json();
            console.log(data); 
            // setArticles([...articles, { id: data.id, titulo: titulo, descricao: descricao, nome: nome }]); 
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
                    nome: userName,
                })
            });
            const data = await response.json();
            console.log(data); 
            setArticles(articles?.map((item) => (item.id === article.id ? { ...item, titulo: titulo, descricao: descricao } : item)));
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
                setArticles(articles?.filter((article) => article.id !== id));
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
                        <button className="btn" onClick={() => setShowForm(true)}>Criar Artigo</button>
                    )}
                </div>
                {showForm && (
                    <section className="form-background-container">
                        <div className="article-form">
                            {editingArticle ? (<h4 className="form-title">Editar artigo</h4>) : (<h4 className="form-title">Criar novo artigo</h4>)}
                            <input type="text" placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                            <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                                <div className="buttons-wrapper">
                                    {editingArticle ? (
                                        <button className="btn" onClick={() => handleEditArticle(editingArticle)}>Salvar</button>
                                    ) : (
                                        <button className="btn" onClick={handleCreateArticle}>Criar</button>
                                    )}
                                    <button className="btn" onClick={() => { setShowForm(false); setEditingArticle(null); }}>Fechar</button>
                                </div>
                        </div>
                    </section>
                )}
                {loading ? (
                    <p>Carregando artigos...</p>
                ) : (
                    articles?.length === 0 ? (
                        <p>Nenhum artigo encontrado.</p>
                    ) : (
                        articles?.map((article, index) => (
                            <div key={index} className="article">
                                <h2>{article.titulo}</h2>
                                <br />
                                <p className="author">Autor: <span>{article?.userName}</span> </p>
                                <br/>
                                <br />
                                <div className="text-container">
                                <p className="article-text">{article.descricao}</p>
                                </div>
                                <br/>
                                {userCargo === 3 && (
                                    <div>
                                        <button className="btn edit-btn-color" onClick={() => handleEditClick(article)}>Editar</button>
                                        <button className="btn" onClick={() => handleDeleteArticle(article.id)}>Excluir</button>
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
