import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import KPI from '../Visualization/KPI.js';

const info = {
  name: "Name",
  prefix: "$",
  suffix: '%',
  value: '100',
  symbol: 'SYMN'
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: "solid",
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function DashboardPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     <Grid container spacing={3}>
       <Grid item xs={12} sm={6} md={3}>
         <Paper className={classes.paper}>xs=6 sm=3</Paper>
       </Grid>
       <Grid item xs={12} sm={6} md={3}>
         <Paper className={classes.paper}>xs=6 sm=3</Paper>
       </Grid>
       <Grid item xs={12} sm={6} md={3}>
         <KPI info={info}/>
       </Grid>
       <Grid item xs={12} sm={6} md={3}>
         <Paper className={classes.paper}>xs=6 sm=3</Paper>
       </Grid>
       <Grid item xs={12}>
         <Paper className={classes.paper}>xs=12</Paper>
       </Grid>
     </Grid>
    </div>
  )
}

export default DashboardPage
