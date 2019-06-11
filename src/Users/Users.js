import React, {useState} from "react";
import UsersTable from './UsersTable.js';
import UserCard from './UserCard.js';
import { makeStyles } from '@material-ui/core/styles';

import {
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Grid,
} from '@material-ui/core';

import {
  VerticalSplit,
  ViewHeadline,
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  toggleButton: {
   margin: theme.spacing(1),
   position: 'absolute',
   top: '65px',
   right: '10px',
 },
}));

function Users() {
  const classes = useStyles();
  const [splitView, setSplitView] = useState(false)
  const GridNum = splitView ? 8 : 12

  function toggleSplitView() {
    setSplitView(!splitView)
  }

  return(
    <div>
      <IconButton className={classes.toggleButton} aria-label="Delete">
        {splitView ?
          <ViewHeadline onClick={toggleSplitView}/>
          :
          <VerticalSplit onClick={toggleSplitView} />
         }
      </IconButton>

      <div className={classes.root}>
       <Grid container spacing={3}>
         <Grid item xs={12} sm={6} md={GridNum}>
           <UsersTable/>
         </Grid>
         {splitView ?
           <Grid item xs={12} sm={4} md={4}>
             <UserCard/>
           </Grid>
           :
           null
         }
       </Grid>
      </div>
    </div>
  )
}

export default Users
