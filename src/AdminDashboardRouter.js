import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Users from './Users/Users.js';
import DashboardPage from './Dashboard/DashboardPage.js';
import Reviews from './Reviews/Reviews.js';
import Analytics from './Analytics/Analytics.js';

function AdminDashboardRouter() {
  return (
     <Switch>
         <Route exact path="/" component={DashboardPage} />
         <Route path="/users/" component={Users} />
         <Route path="/analytics/" component={Analytics} />
         <Route path="/reviews/" component={Reviews} />
     </Switch>
 );
}

export default AdminDashboardRouter
