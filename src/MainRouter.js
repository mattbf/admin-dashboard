import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AdminDashboard from './AdminDashboard.js';

function MainRouter() {
  return (
    <Router>
         <Route path="/" component={AdminDashboard} />
    </Router>
 );
}

export default MainRouter
