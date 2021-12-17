import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import WeatherCard from './WeatherCard';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh'

  }
}));

function Bio() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <WeatherCard />
    </div>
  )
}

export default Bio;
