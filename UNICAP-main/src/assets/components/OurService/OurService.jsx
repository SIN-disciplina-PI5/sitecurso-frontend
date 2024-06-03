import "./OurService.css";
import Tag from "../Tag/Tag";
import diplomado from "../../images/diplomado.png";
import decisao from "../../images/decisao.png";
import sociedade from "../../images/sociedade.png";
import tecnologia from "../../images/tecnologia.png";


const OurService = () => {
  return (
    <div>
      <div className="ourServiceTagContainer">
        <h2 className="CourseComplete"><a href="https://portal.unicap.br/documents/475032/3370604/Sistemas+para+Internet+-+Matriz+76.A.2N.pdf/bb8eba59-a1ea-cb67-ada4-06a99992fb73?t=1686148835930" target="_blanck">
          Conferir estrutura, matriz curricular e investimento do curso</a></h2>

        <div className="tagTwoBox">
          <Tag

            text="Oferecer sólida formação acadêmica, aliada ao despertar no estudante a necessidade de sua intervenção como profissional e cidadã, na injusta realidade socioeconômica que nos cerca, visando transformá-la a partir de ações e atitudes fundamentadas na solidariedade consciente e responsável; "
            imageSrc={diplomado}
          />
          <Tag
            text="Contribuir para o desenvolvimento da sociedade através da formação de profissionais competentes e cidadãos comprometidos com os valores morais e socioambientais. "
            imageSrc={sociedade}
          />
          <Tag
            text='Capacitar o profissional para que possua além das habilidades e competências necessárias para o desenvolvimento de soluções para Web, ter um espírito engajador atrelado à capacidade de tomada de decisão;'
            imageSrc={decisao}
          />
          <Tag
            text='Incentivar o desenvolvimento de soluções para Web (conteúdo e mídias) despertando um perfil empreendedor, criativo e social, capaz de produz mudanças no contexto em que está inserido atendendo às demandas e peculiaridades regionais e buscando interação com o mercado globalizado;'
            imageSrc={tecnologia}
          />
        </div>


      </div>
    </div>
  );
};
export default OurService;
