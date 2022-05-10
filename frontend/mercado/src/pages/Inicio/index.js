import {useNavigate} from 'react-router-dom';
import './styles.css';
import IMG1 from '../assets/img1.png'
import 'animate.css';

import Logo from '../assets/logo.png';
import {Button} from 'antd';

export default function Inicio(){

    const navigate = useNavigate();

    async function listarProdutos(event){
        event.preventDefault();
        navigate('/produtos')
    }

    return(
        <div className='inicio__container'>
            <section>
                <h1 class="animate__animated animate__zoomInDown">Agora!</h1> <br/>
                <h2 class="animate__animated animate__zoomInDown animate__delay-1s">Criar sua lista de compras ficou facil e pratico</h2>
                <img class="animate__animated animate__fadeIn animate__delay-2s" src={IMG1} />
            </section>
        </div>
    )
}