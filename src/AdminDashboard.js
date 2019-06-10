import React, {useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import NotificationsIcon from '@material-ui/icons/Notifications';
import DashboardList from './DashboardList.js';
import AdminDashboardRouter from './AdminDashboardRouter.js';
import {withRouter} from 'react-router'
import { BrowserRouter as Router, Route, match} from "react-router-dom";
import NotificationsMenu from './NotificationsMenu.js';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';

import {
  AppBar,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  Badge,
  Container,
  Grid,
  Paper,
  Link,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  ListItem,
} from '@material-ui/core'

import {
  Notifications,
  Star,
  PersonAdd,
  ChevronLeft,
} from '@material-ui/icons'


function ExternalLinks() {
  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" align="center" className={classes.externallinks}>
      {'Go to '}
    <a target="_blank" color="inherit" href="https://material-ui.com/" className={classes.link}>Website</a>
      {' or '}
      <a target="_blank" color="inherit" href="https://material-ui.com/" className={classes.link}>Application</a>
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed

  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
    '&:hover': {
      textDecoration: 'underline',
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
  },
  externallinks: {
    bottom: '0px',
  },
}));

const StyledMenu = withStyles({
  paper: {
    minWidth: '300px',
  },
})(props => (
  <Menu
    {...props}
  />
));

function AdminDashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const {mainListItems, secondaryListItems} = DashboardList()
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const [anchorEl, setAnchorEl] = useState(null);

  function handleOpenNotifications(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleCloseNotifications() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar color='primary' position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            Dashboard Name
          </Typography>
          <IconButton color="inherit" onClick={handleOpenNotifications}>
            <Badge badgeContent={4} color="secondary">
              <Notifications />
              </Badge>
          </IconButton>
          <StyledMenu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleCloseNotifications}
            className={classes.notifMenu}
          >
            <List>
              <ListItem button>
                <ListItemIcon >
                  <PersonAdd color="secondary"/>
                </ListItemIcon>
                <ListItemText primary="2 New Users!" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <Star color="secondary"/>
                </ListItemIcon>
                <ListItemText primary="New Review Submitted" />
              </ListItem>
            </List>
            <Divider />
            <MenuItem onClick={handleCloseNotifications}>Logout</MenuItem>
          </StyledMenu>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeft />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>

        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
              <AdminDashboardRouter/>
            </Container>
          <ExternalLinks />
        </main>
    </div>
  );
}

export default AdminDashboard
// // <Grid container spacing={3}>
// //   {/* Chart */}
// //   <Grid item xs={12} md={8} lg={9}>
// //     <Paper className={fixedHeightPaper}>
// //       Chart
// //     </Paper>
// //   </Grid>
// //   {/* Recent Deposits */}
// //   <Grid item xs={12} md={4} lg={3}>
// //     <Paper className={fixedHeightPaper}>
// //       Some lines
// //     </Paper>
// //   </Grid>
// //   {/* Recent Orders */}
// //   <Grid item xs={12}>
// //     <Paper className={classes.paper}>
// //       Some orders
// //     </Paper>
// //   </Grid>
// </Grid>
