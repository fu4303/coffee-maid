import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Views/App';
import Recipes from './Views/Recipes';
import Chemex from './Views/Chemex';
import ScrollToTop from './Handler/ScrollToTop';
import * as serviceWorker from './serviceWorker';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

const routing = (
    <BrowserRouter>
        <ScrollToTop>
            <Switch>
                <Route exact path='/' component={App} />
                <Route path='/recipes' component={Recipes} />
                <Route path='/chemex' component={Chemex} />
            </Switch>
        </ScrollToTop>
    </BrowserRouter>
);

ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
