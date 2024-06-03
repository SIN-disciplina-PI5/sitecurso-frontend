import "./Projeto.css";
import NavBar from "../NavBar/NavBar";

const Projeto = () => {
  return (
    <div id="projetoPedagogico">
              <NavBar />

      <div className="ProjetoPedagógico">

        <h1 className="Title">Avaliação Institucional</h1>
        <p className="TextContent">
          a UNICAP está realizando a auto-avaliação conforme o Sistema Nacional de Avaliação da Educação Superior (SINAES), estabelecido pela Lei nº 10.861, de 14.04.2004.
        </p>
        <h1 className="Title">Regime de Aprovação</h1>
        <p className="TextContent">
        o regime de aprovação em cada disciplina obedece ao Regimento da UNICAP</p>
        <h1 className="Title">Avaliação do Aluno</h1>
        <p className="TextContent">
        a avaliação é concebida como um dos mecanismos de acompanhamento da aprendizagem do aluno e se realiza de forma processual e diagnóstica, cujo o objetivo é atuar preventivamente na melhoria do desempenho dos alunos.        </p>

      </div>

      <hr></hr>


    </div>

  );
};
export default Projeto;
