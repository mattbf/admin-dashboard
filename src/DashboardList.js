import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import Star from '@material-ui/icons/Star';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import App from './App.js';

const DashboardLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/" {...props} />
));
const UsersLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/users/" {...props} />
));
const AnalyticsLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/analytics/" {...props} />
));
const ReviewsLink = React.forwardRef((props, ref) => (
  <Link innerRef={ref} to="/reviews/" {...props} />
));

export const mainListItems = (
  <div>
    <ListItem button component={DashboardLink}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button component={AnalyticsLink}>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem button component={UsersLink}>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem button component={ReviewsLink}>
      <ListItemIcon>
        <Star />
      </ListItemIcon>
      <ListItemText primary="Reviews" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current Day" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current Month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last Quarter" />
    </ListItem>
  </div>
);
