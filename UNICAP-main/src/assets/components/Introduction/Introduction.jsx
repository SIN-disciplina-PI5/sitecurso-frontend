import { Link } from 'react-scroll'
import '../../components/Introduction/Introduction.css'
import Icon_Si from '../../images/Sist_Internet.png'
import logoVetor from '../../images/catolica_vinho.png'
import { useState } from 'react'

const Introduction = () => {

const [ active, setMode ] = useState(false);

    const toggleMode = () => {
        setMode(!active);
    }


    return (
        <div className='Container'>
            <div className='Subcontainer'>
                <div className='Logo_box'>
                    <div className='Logo_box2'>
                        <div className='Logo_box3'>
                            <div className='Text_logo'>
                                <h3>SISTEMAS</h3>
                            </div>
                        </div>
                        <img src={logoVetor} alt="" className='logoVetor'/>
                    </div>
                    <div className='Text_logo2'>
                        <div className='Text_1'>
                            <h2>PARA</h2>
                        </div>
                        <div className='Text_2'>
                            <h2 >INTERNET</h2>
                        </div>
                    </div>
                    
                </div>
                <div className="botoes">
                    <div >
                    <Link to="sobreoSin" smooth={true} duration={500} onClick={toggleMode}>

                        <a  className="btnHeader" target='blank'>Sobre o curso</a>
                    </Link>
                    </div>
                </div>
            </div>

            <div className='Subcontainer_2'>
                <div>
                    <img src={Icon_Si} alt=""  />
                </div>

            </div>
        </div>
    )
}

export default Introduction;