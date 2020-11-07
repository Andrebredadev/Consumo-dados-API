import React from 'react'
import { Route } from 'react-router-dom'
import Home from './home'


export default ({match}) => {

    return (
        <Route exact basename={match.path} path={match.path} component={Home} />
    )
}