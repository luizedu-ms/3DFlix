import React from 'react';
import PageDefault from '../../../componentes/PageDefault'
import { Link } from 'react-router-dom';


function CadastroCategoria(){
    return (
      <PageDefault>
        <h1>Cadastro Categoria</h1>

          <form>
              <label>
                Nome da Categoria:
                  <input
                    type="text"
                  />
              </label>
              <button>
                Cadastrar
              </button>
            
          </form>


        <Link to="/">
            Ir para Home
        </Link>
      </PageDefault>
    )  
  }
  export default CadastroCategoria;