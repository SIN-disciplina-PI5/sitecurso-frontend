import NavBar from "../components/NavBar/NavBar";
import About from "../components/About/About";
import OurService from "../components/OurService/OurService";
import Faculty from "../components/Faculty/Faculty";
import ProjetoPedagogico from "../components/ProjetoPedagogico/Projeto";
import "./homePage.css";
import "../../global.css";
import Introduction from "../components/Introduction/Introduction";
import PosEextensao from "../components/PoseExtensao/PoseExtensao";

const Home = () => {
  return (
    <div id="homePage">
      <div className="backgroundNavbar">
        <NavBar />
        
      </div>

      <div className="backgroundSection">
        <header className="section" id="header">
          <Introduction />
        </header>
      </div>
      
    </div>
  );
};

export default Home;
