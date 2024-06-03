import { useEffect, useLayoutEffect, useState } from 'react'
import '../../components/About/About.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { FaCalendarAlt } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import { IoMoonOutline, IoSchoolOutline } from "react-icons/io5";
import NavBar from "../NavBar/NavBar";

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

const [active, setMode] = useState(false);

const toggleMode = () => {
    setMode(!active);
}

    return (
        <div id="sobreoSin">
            <div className="backgroundNavbar">
        <NavBar />
      </div>
            <div className='aboutBoxTitle'>
                <h2 className='titleAbout'>Sistemas para Internet</h2>
                <h3 className='SubtitleAbout'>Curso Superior de Tecnologia</h3>
            </div>

            <div className="aboutSpace"></div>

            <div className='AboutCourse'>

                    <p>Sobre o curso</p>

            </div>


            <div className="aboutContent" id='sobreoSin'>
                <div className="aboutSpace"></div>
                <div className="boxContentRigth">
                    <div className="aboutContentRight" data-aos="fade-up">

                        <p>De forma orgânica e sistêmica, oferecer uma formação integral de modo a formar profissionais capazes de projetar, analisar, e desenvolver soluções computacionais focadas na plataforma web, atreladas a uma boa visão estratégica de qualidade de software e com direção empreendedora de modelo de negócios, para atender e suprir demandas da sociedade e do mundo do trabalho.</p>
                    </div>

                    <div data-aos="fade-up">
                        <div className="botao_objetivos">
                            <div>
                                <a href="https://portal.unicap.br/w/sistemas-para-internet#presencial" className="btnAbout" target='_blank'>Conheça os objetivos específicos</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="aboutSpace"></div>

            <div className="subAboutContent" >
                <div className='Card'>
                    <p>Carga Horária</p>
                    <div className='iconsAndText'>
                        <TbClockHour4 color='#ffffff' size={30} />

                        <span>2160</span>
                    </div>
                </div>
                <div className='Card'>
                    <p>Duração</p>
                    <div className='iconsAndText'>
                        <FaCalendarAlt color='#ffffff' size={30} />
                        <span>5 semestres</span>
                    </div>
                </div>
                <div className='Card'>
                    <p>Turno</p>
                    <div className='iconsAndText'>
                        <IoMoonOutline color='#ffffff' size={30} />
                        <span>Noite</span>
                    </div>
                </div>
                <div className='Card'>
                    <p>Grau</p>
                    <div className='iconsAndText'>
                        <IoSchoolOutline color='#ffffff' size={30} />
                        <span>Tecnológico</span>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default About;