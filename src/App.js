import React, { useState } from 'react';
import api from './services/api'

import './App.css';

function App() {

  const [] = useState();

  function adicionarFuncionario () {
    // ir para form cadastro
    console.log("Cadastrar novo");
  }
  function listarAtivos () {
    // listar funcionarios ativos
    console.log("Listar Ativos");
  }
  function limparFiltros () {
    // exibir todos os funcionarios
    console.log("Mostrar todos");
  }

  return (
    <>
    <h1>Dashboard</h1>
    
    <button onClick={adicionarFuncionario}>+ Adicionar funcionário</button>

    <button onClick={listarAtivos}>Ver apenas ativos</button>
    <button onClick={limparFiltros}>Limpar Filtros</button>
    </>
  );
}

export default App;
