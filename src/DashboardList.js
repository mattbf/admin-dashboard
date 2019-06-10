import React, {useState} from 'react';
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
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
  listItem: {
    color: '#000',
    '&.hover': {
      backgroundColor: "#e0ecff",
    }
  },
  listItemIcon: {
    color: '#2979ff',
    '&.selected': {
      color: "#2979ff",
    }
  }
}))


function DashboardList() {
  const classes = useStyles();
  const [selected, setSelected] = useState(0)
  function updateSelected(selectedIndex) {
    setSelected(selectedIndex);
  }
  
  const mainListItems = (
  <div>
    <ListItem
      button
      component={DashboardLink}
      style={{color: selected === 0 ? "#2979ff" : null, backgroundColor: selected === 0 ? "#ccdfff" : null,}}
      onClick={() => updateSelected(0)}
      selected={selected === 0}
      className={classes.listItem}
    >
      <ListItemIcon style={{color: selected === 0 ? "#2979ff" : null}}>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem
      button
      component={AnalyticsLink}
      style={{color: selected === 1 ? "#2979ff" : null, backgroundColor: selected === 1 ? "#ccdfff" : null}}
      onClick={() => updateSelected(1)}
      selected={selected === 1}
    >
      <ListItemIcon style={{color: selected === 1 ? "#2979ff" : null}}>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Reports" />
    </ListItem>
    <ListItem
      button
      component={UsersLink}
      style={{color: selected === 2 ? "#2979ff" : null, backgroundColor: selected === 2 ? "#ccdfff" : null}}
      onClick={() => updateSelected(2)}
      selected={selected === 2}
    >
      <ListItemIcon style={{color: selected === 2 ? "#2979ff" : null}}>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItem>
    <ListItem
      button
      component={ReviewsLink}
      style={{color: selected === 3 ? "#2979ff" : null, backgroundColor: selected === 3 ? "#ccdfff" : null}}
      onClick={() => updateSelected(3)}
      selected={selected === 3}
    >
      <ListItemIcon style={{color: selected === 3 ? "#2979ff" : null}}>
        <Star />
      </ListItemIcon>
      <ListItemText primary="Reviews" />
    </ListItem>
  </div>
);

const secondaryListItems = (
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

return {secondaryListItems, mainListItems}
}

export default DashboardList
