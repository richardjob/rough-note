import React, { useState } from 'react';
import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthRouter from './Routes/AuthRouter';
import PrivateRoute from './Routes/Helpers/PrivateRoute';
import DashboardRouter from './Routes/DashboardRouter';
import BinderRouter from './Routes/BinderRouter';
import BoardRouter from './Routes/BoardRouter';

function App() {


  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AuthRouter} />
          <PrivateRoute exact path="/dashboard" component={DashboardRouter}/>
          <PrivateRoute exact path="/binder"  component={BinderRouter} />
          <PrivateRoute exact path="/Board"  component={BoardRouter}/>
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
