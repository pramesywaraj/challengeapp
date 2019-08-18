import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import Advertiser from './Pages/Advertiser';

import { History } from './Helpers/History';
import { LayoutRoute } from './Components/LayoutRoute';

function App() {
  return (
    <div>
      <Router history={History}>
        <Switch>
          <Route exact path='/login' component={Login}/>
          <LayoutRoute exact path='/dashboard' component={Dashboard}/>
          <LayoutRoute exact path='/advertiser' component={Advertiser}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
