import React from 'react';
import './App.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import AuthRouter from './Routes/AuthRouter';
import PrivateRoute from './Routes/Helpers/PrivateRoute';
import DashboardRouter from './Routes/DashboardRouter';

function App() {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={AuthRouter} />
          <PrivateRoute exact path="/dashboard" component={DashboardRouter} />
          <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
