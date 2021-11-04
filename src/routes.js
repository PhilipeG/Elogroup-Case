import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Leads from './pages/Leads';
import LeadsPanel from './pages/LeadsPanel';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component= {Login} />
                <Route path='/leads' component= {Leads} />
                <Route path='/painel-leads' component= {LeadsPanel} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;

