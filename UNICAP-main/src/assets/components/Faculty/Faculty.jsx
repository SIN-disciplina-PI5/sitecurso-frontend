import Card from "../Card/Card";
import "./Faculty.css";
import ProfessorMarcio from "../../images/ProfessorMarcio.jpg";
import ProfessorRoque from "../../images/ProfessorRoque.jpg";
import ProfessorGabriel from "../../images/ProfessorGabriel.jpg";
import ProfessorDaniel from "../../images/ProfessorDaniel.jpg";
import ProfessorIago from "../../images/ProfessorIago.jpg";
import ProfessorRobson from "../../images/ProfessorRobson.jpg";
import Slider from "../Slider/Slider";
import NavBar from "../NavBar/NavBar";

const Operation = () => {
  const cards = [
    {
      title: "Daniel Bezerra",
      content: "Professor at Unicap | PHD Candidate at UFPE.",
      imgSrc: ProfessorDaniel,
    },
    {
      title: "Rafael Roque",
      content: " AI/ML | Software Engineering",
      imgSrc: ProfessorRoque,
    },
    {
      title: "Iago Richard",
      content: " Professor at Unicap | PhD Candidate at UFPE.",
      imgSrc: ProfessorIago,
    },
    {
      title: "Robson Cavalcanti",
      content: "Coordenador e professor do curso na Universidade Católica de Pernambuco.",
      imgSrc: ProfessorRobson,
    },
    {
      title: "Gabriel Fernandes",
      content: "Professor at Universidade Católica de Pernambuco",
      imgSrc: ProfessorGabriel,
    },
    {
      title: "Marcio Bueno",
      content: "Professor at Universidade Católica de Pernambuco and Staff Software Engineer no CESAR",
      imgSrc: ProfessorMarcio,
    },
    
  ];

  return (
    

    <div id="gestaoPessoas">
              <div className="backgroundNavbar">
        <NavBar />
      </div>

      <h2 className="gestaoPessoasTitle">Corpo Docente</h2>
      <div className="gestaoPessoasContainer">
        <div className="gestaoPessoasCardsContainer">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} imgSrc={card.imgSrc} />
          ))}
        </div>
      </div>

      <Slider>
        {cards.map((card, index) => (
          <Card key={index} title={card.title} content={card.content} imgSrc={card.imgSrc} />
        ))}
      </Slider>
    </div>
    
  );
};

export default Operation;
