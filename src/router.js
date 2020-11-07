import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import history from './config/history'
import Home from './view/home'



const Routers = () => {

    return (

    <Router history={history}>
        <Switch>
            <Route path="/" component={Home} />
        </Switch>
    </Router> 
    )   
}

export default Routers