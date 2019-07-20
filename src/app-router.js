import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './components/dashboard';
import Addressbook from './components/addressbook';
import Error from "./components/error";




const AppRouter = () => {

    
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Dashboard} exact />
                    <Route path="/addressbook" component={Addressbook} />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    );
    
};

export default AppRouter;