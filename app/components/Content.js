import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  itemz: {
    background: "yellow",
    border: "2em",
    color: "green",
    display: 'flex 1 1',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: theme.align,
  }
}));
const Content = ( props ) => {
  const sstyle = useStyles({ align: 'flex-start'});
  return (
    <Grid container spacing={3}>
    <Grid item sm={10}>
    <Typography className={sstyle.itemz}>
    <p>{props.items}</p>
    </Typography>
    <Typography className={sstyle.itemz}>
    <p>{props.items}</p>
    </Typography>
    <Typography className={sstyle.itemz}>
    <p>{props.items}</p>
    </Typography>
    </Grid>
    </Grid>
  )
}

export default Content;
