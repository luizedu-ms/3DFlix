import React from 'react';
import PageDefault from '../../../componentes/PageDefault'
import { Link } from 'react-router-dom';


function CadastroVideo(){
    return (
      <PageDefault>
        <h1>Cadastro Video</h1>


        <Link to="/cadastro/Categoria">
        Cadastrar Categoria
        </Link>
      </PageDefault>
    )  
  }
  export default CadastroVideo;