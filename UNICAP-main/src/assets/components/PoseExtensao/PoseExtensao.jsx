import "../PoseExtensao/PoseExtensao.css";
import Mestrado from "../../images/Mestrado.png";
import Robotica from "../../images/Robotica.png";
import { FaArrowRightLong } from "react-icons/fa6";
import NavBar from "../NavBar/NavBar";

const PosEextensao = () => {
    return (
        <div id="poseExtensao">
            <div className="backgroundNavbar">
        <NavBar />
      </div>
            <div className="FooterContainer">
                <div className="SubContainer">
                    <div className="Title">
                        <h1>Pós - Graduação</h1>
                        <p>Programas de Pós-Graduação</p>
                    </div>
                    <div className="SubContainerContent">
                        <div className="TitleContent">
                            <h1>Programas</h1>
                            <p>Mestrados</p>
                        </div>
                        <div className="Box">
                            <div className="Content">
                                <h1>
                                    Desenvolvimento de Processos Ambientais...
                                </h1>

                                <p>Mestrado<br />
                                    Secretaria Stricto Sensu: Bloco G4, térreo
                                    Fone: (81) 99146-6993</p>
                            </div>
                            <div className="Foto">
                                <img src={Mestrado} alt="Imagem cara da Unicap "/>
                            </div>


                        </div>


                        <div className="Lermais">
                        <h2>Presencial</h2>

                            <a href="https://portal.unicap.br/desenvolvimento-de-processos-ambientais-ppgdpa-#presencial" className="Lermais" target='_blank'>Ler Mais<FaArrowRightLong color="#690013" /></a>
                            

                        </div>
                    </div>

                </div>
                <div className="SubContainer">

                    <div className="Title">
                        <h1>Extensão</h1>
                        <p>Programas e Projetos</p>

                    </div>
                    <div className="SubContainerContent">
                        <div className="container">
                            <div className="FotoRobotica">
                                <img src={Robotica} alt="" />
                            </div>
                        </div>
                        <div className="BoxRobotica">
                            <div className="Content">
                                <h1>
                                    Robótica aplicada a educação:
                                </h1>

                                <p>
                                O Projeto de Extensão tem como objetivo utilizar a interação humano-robô, com o propósito de ensino de algoritmos e progamação para crianças.   </p>
                            </div>

                        </div>
                        <div className="Lermais">
                        <h2>Presencial</h2>

                            <a href="https://portal.unicap.br/w/robotica-aplicada-a-educacao-uso-do-nao-para-o-ensino-de-linguagem-de-programacao"  target='_blank'>Ler Mais <FaArrowRightLong color="#690013" /></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default PosEextensao;
