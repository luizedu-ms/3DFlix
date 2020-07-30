import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/Video';
import CadastroCategoria from './pages/cadastro/Categoria';
import PageDefault from './componentes/PageDefault';


const Page404 = () =>{
  return(
    <PageDefault>
      <h3 style={{ textAlign: "center" }}> 404 - Page not found </h3>
      
      </PageDefault>
  );
};


ReactDOM.render(
  <BrowserRouter>
      <Switch>
        <Route path="/" component={Home}  exact/>
        <Route path="/cadastro/Video" component={CadastroVideo} />
        <Route path="/cadastro/Categoria" component={CadastroCategoria} />
        <Route component={Page404}/>
      </Switch> 
    
  </BrowserRouter>,
  document.getElementById('root')
);


