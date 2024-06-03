import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import SobreOSin from '../components/About/About';
import Faculty from '../components/Faculty/Faculty';
import PoseExtensao from '../components/PoseExtensao/PoseExtensao';
import Introduction from '../components/Introduction/Introduction';
import OurService from '../components/OurService/OurService';
import ProjetoPedagogico from '../components/ProjetoPedagogico/Projeto';
import Login from '../components/Login/Login';
import PaginaInicial from "../components/Home/Home";
import Register from "../components/Register/Register";

const AppRoutes = () => {
    return(
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/sobre-o-sin" element={<SobreOSin />} />
            <Route path="/gestao-e-pessoas" element={<Faculty />} />
            <Route path="/pos-graduacao" element={<PoseExtensao />} />
            <Route path="/pesquisa-e-extensao" element={<ProjetoPedagogico />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/PaginaInicial" element={<PaginaInicial/>} />
            <Route path="/Registro" element={<Register/>} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

export default AppRoutes;
