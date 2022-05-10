import React, { useEffect, useState } from "react";
import api from '../../services/api';
import { Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

import './styles.css'

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        api.get('/item')
            .then((response) => {
                setProdutos(response.data)
            })
            .catch((err) => {
                console.log("Aconteceu um erro." + err);
            })
    }, []);

    return (
        <div className="produto__container animate__animated animate__zoomInUp">
            <h1>Relação de todos os Produtos</h1>
            <div className="produto__card__container">
                {
                    produtos.map(produto => (
                        <Card className='animate__animated animate__headShake animate__delay-1s' hoverable key={produto.id} title={produto.name} bordered={false} style={{ width: 300,backgroundColor:"aquamarine"}}>
                            <p>Descrição:{produto.description}</p>
                            <p>Quantidade:{produto.quantity}</p>
                            <Button onClick={()=>navigate(`/detalhes/${produto.id}`)}>Detalhes</Button>
                        </Card>
                    ))}
            </div>
        </div>
    )
}
