import "./Home.css";
import React, { useState } from "react";
import Sidebar from '../../components/SideBar/Sidebar.jsx';

const Home = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [articles, setArticles] = useState([
        { id: 1, title: "Artigo 1", author: "Professor A" },
        { id: 2, title: "Artigo 2", author: "Professor B" },
        { id: 3, title: "Artigo 3", author: "Professor C" },
    ]);

    const handleToggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const handleLogout = () => {
    };

    return (
        <div className="home-container">
            <Sidebar/>

            

            
        </div>
    );
};

export default Home;
