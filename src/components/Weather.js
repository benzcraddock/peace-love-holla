import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import WeatherCard from './WeatherCard';
import staticWeather from '../static/staticWeather';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

function Weather() {
  const classes = useStyles();
  const checked = useWindowPosition('header');

  return (
    <div className={classes.root}>
      <WeatherCard weather={staticWeather[0]} checked={checked}/>
      <WeatherCard weather={staticWeather[1]} checked={checked}/>
    </div>
  )
}

export default Weather;
