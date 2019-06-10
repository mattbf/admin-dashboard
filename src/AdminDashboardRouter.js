import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Users from './Users.js';
import DashboardPage from './DashboardPage.js';
import Reviews from './Reviews.js';
import Analytics from './Analytics.js';

function AdminDashboardRouter() {
  return (
     <Switch>
         <Route exact path="/" component={DashboardPage} />
         <Route path="/users/" component={Users} />
         <Route path="/Analytics/" component={Analytics} />
         <Route path="/reviews/" component={Reviews} />
     </Switch>
 );
}

export default AdminDashboardRouter
