import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {match} from 'react-router-dom';

import {
  Paper,
  Typography,
  IconButton,
  Tooltip,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core';

import {
  ArrowUpward,
  InfoOutlined,
  TrendingUp,
  Person,
  CalendarToday,
} from '@material-ui/icons';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      width: '100%',

      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
    card: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      width: '100%',
      height: '100%',
    },
    Heading: {
      marginRight: '20px',
    },
    Value: {

    },
    valuebox: {
      display: 'flex',
      alignItems: 'center',
    },
    margin: {
      margin: theme.spacing(1),
    },
    infoButtons: {
      display: 'flex',
      alignItems: 'center',
      position: 'absolute',
      right: '2px',
      top: '2px',
    },
    colorHover: {
      '&:hover': {
       color: "#00C676",
       backgroundColor: 'rgba(0, 198, 118, 0.15)',
     },
   },
   twoList: {
     display: 'flex',

   }
  }),
);

function UserCard(props) {
  const classes = useStyles();
  const info = props.info
  return (
    <div className={classes.root}>
      <Paper className={classes.card}>
        <List className={classes.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <Person />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={info.username} secondary={info.email} />
          </ListItem>
        </List>
        <Divider/>
        <div className={classes.twoList}>
          <List className={classes.root}>
            <ListItem>
              <ListItemText primary="Account Created:" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Last Sign On" />
            </ListItem>
            <ListItem>
              <ListItemText primary="# of Meeting Types" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Meetings Booked" />
            </ListItem>
          </List>
          <List className={classes.root}>
            <ListItem>
              <ListItemText primary={info.dateCreate.getDate()} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Feb 16, 2018" />
            </ListItem>
            <ListItem>
              <ListItemText primary="3" />
            </ListItem>
            <ListItem>
              <ListItemText primary="123" />
            </ListItem>
          </List>
        </div>
      </Paper>
    </div>
  )
}

export default UserCard
