import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {match} from 'react-router-dom';

import {
  Paper,
  Typography,
  IconButton,
  Tooltip,
} from '@material-ui/core';

import {
  ArrowUpward,
  InfoOutlined,
  TrendingUp,
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
    }
  }),
);

function KPI(props) {
  const classes = useStyles();
  const info = props.info
  return (
    <div className={classes.root}>
      <Paper className={classes.card}>
        <div className={classes.infoButtons}>
          {info.trend ?
            <Link style={{textDecoration: 'none'}} to={`/stocks/${info.symbol}/${info.name}`}>
              <IconButton aria-label="Delete"  size="small" className={classes.colorHover}>
                <TrendingUp fontSize="inherit"/>
              </IconButton>
            </Link>
            :
            null
          }
          <Tooltip title={info.tooltip} interactive placement="bottom-end">
            <IconButton aria-label="Delete"  size="small">
              <InfoOutlined fontSize="inherit"/>
            </IconButton>
          </Tooltip>
        </div>
        <Typography variant='subtitle2' className={classes.Heading}> {info.name} </Typography>
        <div className={classes.valuebox}>
          <Typography variant='subtitle1' className={classes.Value}> {info.prefix} </Typography>
          <Typography variant='subtitle1' className={classes.Value}> {info.value} </Typography>
          <Typography variant='subtitle1' className={classes.Value}> {info.suffix} </Typography>
        </div>
      </Paper>
    </div>
  )
}

export default KPI
