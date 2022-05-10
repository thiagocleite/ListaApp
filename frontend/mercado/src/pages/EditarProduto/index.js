import './styles.css';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
import { message, Input, Button, InputNumber } from 'antd';
import AdicionarProduto from '../AdicionarProduto';

export default function EditarProduto() {
    const navigate = useNavigate();
    const location = useLocation();

    const [produtoEdit, setProdutoEdit] = useState({})

    useEffect(() => {
        console.log(location)
        setProdutoEdit({ ...location.state })
    }, [location])

    async function handleSubmitEdit(produto) {
        api.patch(`/item/${produto.id}`, produto)
            .then((response) => {
                if (response.status === 200) {
                    message.success("Produto editado com sucesso!", 5)
                    navigate('/produtos');
                }
            })
            .catch((err) => {
                message.error(`Aconteceu um erro inesperado. ${err.response.data.message}`,5)
            })
    }

    return (
        <div className='produto__container'>
            <h1>Editar Produto : <strong>{produtoEdit.name}</strong></h1>
            <br />
            <div className='produto__edit'>

                <div className='produto__campo'>
                    <span className='produto__label'>Nome do produto:</span>
                    <Input value={produtoEdit?.name} onChange={(e) => {
                        setProdutoEdit((produtoEdit) => {
                            return { ...produtoEdit, name: e.target.value }
                        })
                    }} />
                </div>
                <div className='produto__campo'>
                    <span className='produto__label'>Descrição do produto:</span>
                    <Input value={produtoEdit?.description} onChange={(e) => {
                        setProdutoEdit((produtoEdit) => {
                            return { ...produtoEdit, description: e.target.value }
                        })
                    }} />
                </div>
                <div className='produto__campo'>
                    <span className='produto__label'>Quantidade do produto:</span>
                    <InputNumber value={produtoEdit?.quantity} onChange={(e) => {
                        setProdutoEdit((produtoEdit) => {
                            return { ...produtoEdit, quantity: e }
                        })
                    }} />
                </div>

                <Button type='primary' onClick={() => handleSubmitEdit(produtoEdit)} className='editar__btn'>Editar</Button>

            </div>
        </div>
    )
}