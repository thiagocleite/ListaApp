import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { useParams, useNavigate } from "react-router-dom";
import './styles.css'
import { ExclamationCircleOutlined,EditOutlined } from '@ant-design/icons'
import { Button, Card, message, Modal } from "antd";

export default function DetalhesProduto() {
    const [produto, setProduto] = useState([])
    const navigate = useNavigate();

    let { id } = useParams();

    const { confirm } = Modal;

    function showConfirm(produto) {
        confirm({
            title: `Você tem certeza que quer excluir o produto ${produto.name}?`,
            icon: <ExclamationCircleOutlined />,
            content: 'Escolha uma opção.',
            onOk() {
                handleDelete(produto.id);
            },
            onCancel() {

            },
        });
    }

    function handleDelete(id) {
        api.delete(`/item/${id}`)
            .then((response) => {
                if (response.status === 200) {
                    message.success("Produto foi excluido com sucesso!");
                    navigate('/produtos')
                }
            })
            .catch((err) => {
                message.error("Aconteceu um erro inesperado")
            })
    }

    useEffect(() => {
        api.get(`/item/${id}`)
            .then((response) => {
                setProduto(response.data)
            })
            .catch((err) => {
                message.error("Aconteceu um erro inesperado")
            })
    }, [])

    return (
        <div className="produto__container">
            <h1>Detalhes do produto</h1>
            <br />
            <div className="produto__card__container">
                <Card hoverable key={produto.id} title={produto.name} bordered={true} style={{backgroundColor:"aquamarine"}}>
                    <p>Id:{produto.id}</p>
                    <p>Nome:{produto.name}</p>
                    <p>Descrição:{produto.description}</p>
                    <p>Quantidade:{produto.quantity}</p>
                    <hr/>
                    <div className="produto__card__actions">
                    <Button type="primary" success icon={<EditOutlined/>} onClick={() => navigate(`/editar/${produto.id}`,{state : produto})}>Editar</Button>    
                    <Button type="primary" danger onClick={() => showConfirm(produto)}>Excluir</Button>
                    </div>
                </Card>
            </div>
        </div>
    )
}