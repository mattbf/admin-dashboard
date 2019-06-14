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
  ArrowDownward,
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
    wrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'start',
      justifyContent: 'space-between',
    },
    Heading: {
      marginRight: '20px',
    },
    infoDiv: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start'
    },
    valueDiv: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    valuebox: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    margin: {
      margin: theme.spacing(1),
    },
    colorHover: {
      '&:hover': {
       color: "#00C676",
       backgroundColor: 'rgba(0, 198, 118, 0.15)',
     },
   },
   arrow: {
     marginTop: '-2px',
   }
  }),
);

const info = {
  title: 'Users',
  value: '12',
  suffix: '%',
  isPos: false,
  change: '2',
  changeperc: '18.5',
}

function KPI(props) {
  const classes = useStyles();
  //const info = props.info
  return (
    <div className={classes.root}>
      <Paper className={classes.card}>
        <div className={classes.wrapper}>
          <div className={classes.infoDiv}>
            <Typography variant='subtitle2' className={classes.Heading}> {info.title} </Typography>
            <div className={classes.valueDiv}>
            <Typography variant='h3' > {info.value} </Typography>
            {info.isPos ? <Typography style={{ color: '#00c676', marginBottom: '3px', marginLeft: '6px', marginRight: '2px', }}> + </Typography> : <Typography style={{ color: '#ff1744', marginBottom: '3px', marginLeft: '6px', marginRight: '2px',  }}> - </Typography> }
            {info.isPos ? <Typography variant='subtitle1' style={{ color: '#00c676',  }}> {info.change} </Typography> : <Typography variant='subtitle1' style={{ color: '#ff1744',  }}> {info.change} </Typography> }

            </div>
          </div>
          <div className={classes.valuebox} style={{color: info.isPos ? '#00c676' : '#ff1744',}}>
            {info.isPos ? <ArrowUpward style={{ fontSize: 16 }} className={classes.arrow}/> : <ArrowDownward style={{ fontSize: 12 }} className={classes.arrow}/> }
            <Typography variant='subtitle1' className={classes.percent}>{info.changeperc}</Typography>
            <Typography variant='subtitle1' className={classes.percent}>{info.suffix}</Typography>
          </div>
        </div>
      </Paper>
    </div>
  )
}

export default KPI
