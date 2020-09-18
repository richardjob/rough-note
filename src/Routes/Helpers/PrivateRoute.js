import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { isAuthenticated } from '../../services';

const PrivateRoute = ({ component: Component, ...rest }) => {

    return isAuthenticated() ? (
        <Route
            {...rest}
            render={props => <Component {...props} />}
        />
    ) : (
            <Redirect to="/" />
        )

}

export default PrivateRoute;