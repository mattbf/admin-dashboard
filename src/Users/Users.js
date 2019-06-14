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

const UsersData =[
  { id: '1', username: 'username', email: 'e@mail.com', dateCreate: new Date() },
  { id: '2', username: 'Name', email: 'email@gmail.com', dateCreate: new Date() },
  { id: '3', username: 'Something', email: 'jim@gmail.com', dateCreate: new Date() },
  { id: '4', username: 'Baran', email: 'something@c.com', dateCreate: new Date() },

]

function Users() {
  const classes = useStyles();
  const [splitView, setSplitView] = useState(false)
  const GridNum = splitView ? 8 : 12
  const [selectedUser, setSelectedUser] = useState(null)

  function toggleSplitView() {
    setSplitView(!splitView)
  }
  function selectUser(id) {
    setSelectedUser(id - 1)
    setSplitView(true)
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
           <UsersTable users={UsersData} openCard={selectUser}/>
         </Grid>
         {splitView ?
           <Grid item xs={12} sm={4} md={4}>
             <UserCard info={UsersData[selectedUser]}/>
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
