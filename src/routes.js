import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    // Defini que as rotas vão ser utilizadas através de um Browser
    <BrowserRouter>

        {/* Permiti que apenas uma única rota seja chamada ao mesmo tempo */}
        <Switch>
            {/* Vai ser acessada quando usuário não tiver nenhum caminho, e mostrará a ele o componente Main */}
            <Route exact path="/" component={Main}></Route>
            
            <Route path="/products/:id" component={Product}></Route>

        </Switch>
    
    </BrowserRouter>
);

export default Routes;