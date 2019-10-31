import React, { useState, useEffect } from 'react';
import api from './services/api';

import Sidebar from './components/Sidebar'

import './App.css';

function App() {

  const [data, setData] = useState([]);

  useEffect(async () => {
    const result = await api.get('/funcionarios')
    setData(result.data)
  }, []);

  function adicionarFuncionario() {
    // ir para form cadastro
    console.log("Cadastrar novo");
  }
  function listarAtivos() {
    // listar funcionarios ativos
    console.log("Listar Ativos");
  }
  function limparFiltros() {
    // exibir todos os funcionarios
    console.log("Mostrar todos");
  }

  return (
    <>
      <h1>Dashboard</h1>

      <Sidebar />

      <button onClick={adicionarFuncionario}>+ Adicionar funcionário</button>

      <button onClick={listarAtivos}>Ver apenas ativos</button>
      <button onClick={limparFiltros}>Limpar Filtros</button>

      <ul>
        {data.map(funcionario => (
          <li key={funcionario.objectID}>
            id: {funcionario.id} <br />
            Nome: {funcionario.nome} <br />
            CPF: {funcionario.cpf}
            Cargo: {funcionario.cargoId}
            Atividades: {funcionario.atividades[0].atividadeId}
          </li>
        ))}
      </ul>

    </>
  );
}

export default App;