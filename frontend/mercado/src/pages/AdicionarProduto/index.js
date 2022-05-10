import './styles.css';
import React, { useState } from 'react';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
import { message, Form, Input, Button, InputNumber } from 'antd'

export default function AdicionarProduto() {
    const [disabled, setDisabled] = useState(false)
    const navigate = useNavigate();

    async function handleSubmit(produto) {
        setDisabled(true)
        api.post('/item', produto)
            .then((response) => {
                if (response.status === 201) {
                    message.success('Produto adicionado com sucesso!');
                    navigate('/produtos')
                }
            })
            .catch((err) => {
                setDisabled(false);
                message.error(`Aconteceu um erro ao adicionar o produto. Erro interno : ${err.response.data.message}`);
            })
    }

    return (
        <div className='produto__container animate__animated animate__zoomInDown'>
            <h1>Adicionar novo produto</h1>
            <br />
            <div>
                <Form
                    name='submitProduto'
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={handleSubmit}
                    autoComplete="on">

                    <Form.Item
                        label="Nome"
                        name="name"
                        rules={[{ required: true, message: "O Nome do produto não pode ser vazio" }]}>
                            <Input/>
                    </Form.Item>

                    <Form.Item
                    label="Descrição"
                    name="description"
                    rules={[{ required: true, message: "O produto deve ter uma descrição" }]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item
                    label="Quantidade"
                    name="quantity"
                    rules={[{ required: true, message: "Insira a quantidade desejada." }]}>
                        <InputNumber/>
                    </Form.Item>
                    
                    <Form.Item>
                        <Button type='primary' htmlType='submit' disabled={disabled}>
                            Adicionar
                        </Button>
                    </Form.Item>

                </Form>
            </div>
        </div>
    )
}