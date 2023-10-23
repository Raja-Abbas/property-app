// Router.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Buyer from './Buyer/main';
import Seller from './Seller/Main';
import Investor from './Investor/main';
import PropertyManagement from './PropertyManagement/Main';
import About from './About/Main';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/buyer" component={Buyer} />
        <Route path="/seller" component={Seller} />
        <Route path="/investor" component={Investor} />
        <Route path="/property-management" component={PropertyManagement} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
