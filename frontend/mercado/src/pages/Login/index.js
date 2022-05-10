import './styles.css';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { useNavigate, useLocation } from 'react-router-dom';
import { message, Input, Button, InputNumber,Form } from 'antd';

export default function EditarProduto() {
    const navigate = useNavigate();
    const location = useLocation();

    const [produtoEdit, setProdutoEdit] = useState({})

    useEffect(() => {
        console.log(location)
        setProdutoEdit({ ...location.state })
    }, [location])

    async function handleSubmit(produto) {
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
            <h1>Login</h1>
            <br />
            <div className='produto__edit'>
            <Form
                    name='submitProduto'
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={handleSubmit}
                    autoComplete="on">

                    <Form.Item
                        label="Login"
                        name="login"
                        rules={[{ required: true, message: "Informe seu login" }]}>
                    <Input/>
                    </Form.Item>

                    <Form.Item
                        label="Senha"
                        name="senha"
                        rules={[{ required: true, message: "Informe sua senha" }]}>
                    <Input.Password name='senha' />
                    </Form.Item>

                <Button type='primary' htmlType='submit'>Entrar</Button>
                </Form>
            </div>
            <div style={{textAlign:'center'}}>
                É novo por aqui? Deseja se <a>cadastrar</a>?
            </div>
        </div>
    )
}