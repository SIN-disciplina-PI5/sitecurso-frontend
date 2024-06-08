import "./Projeto.css";
import NavBar from "../NavBar/NavBar";

const Projeto = () => {
  return (
    <div id="sobreoSin1">
            <div className="backgroundNavbar">
                <NavBar />
            </div>             

        <div className='aboutBoxTitle1'>
            <br />
            <h2 className='titleAbout1'>Avaliação Institucional</h2>
            <h3 className='SubtitleAbout1'>a UNICAP está realizando a auto-avaliação conforme o Sistema Nacional de Avaliação da Educação Superior</h3>
        </div>

        <div className="aboutSpace1"></div>
            <div className='AboutCourse1'>
                    <p>Regime de Aprovação</p>
            </div>
            <div className="aboutContent1" id='sobreoSin'>
                {/* <div className="aboutSpace"></div> */}
                <div className="boxContentRigth1">
                    <div className="aboutContentRight1" data-aos="fade-up">
                        <p>O regime de aprovação em cada disciplina obedece ao Regimento da UNICAP</p>
                    </div>
                </div>
            </div>
            <div className='AboutCourse1'>
                    <p>Avaliação do Aluno</p>
            </div>
            <div className="aboutContent1" id='sobreoSin'>
                {/* <div className="aboutSpace"></div> */}
                <div className="boxContentRigth1">
                    <div className="aboutContentRight1" data-aos="fade-up">
                        <p>a avaliação é concebida como um dos mecanismos de acompanhamento 
                          da aprendizagem do aluno e se realiza de forma processual e diagnóstica, cujo o objetivo é 
                          atuar preventivamente na melhoria do desempenho dos alunos. </p>
                    </div>
                </div>
            </div>        
    </div>

  );
};
export default Projeto;
