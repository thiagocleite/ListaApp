import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Produtos from '../src/pages/Produtos';
import Inicio from '../src/pages/Inicio';
import AdicionarProduto from "./pages/AdicionarProduto";
import DetalhesProduto from './pages/DetalhesProduto';
import EditarProduto from './pages/EditarProduto';
import Login from './pages/Login'

export default function Router() {
    return (
        
            <Routes>
                <Route path='/' exact element={<Inicio/>} />
                <Route path='/produtos' element={<Produtos/>} />
                <Route path='/adicionar' element={<AdicionarProduto/>} />
                <Route path='/detalhes/:id' element={<DetalhesProduto/>} />
                <Route path='/editar/:id' element={<EditarProduto/>} />
                <Route path='/login' element={<Login/>} />
            </Routes>
        
    )
}