import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Collapse } from "@material-ui/core";
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '2.5rem'
  },
  card: {
    maxWidth: 600,
    background: 'rgba(0, 0, 0, 0.2)'
  },
  media: {
    height: 400
  },
  content: {
    marginTop: '1.5rem'
  }
});

export default function WeatherCard({ weather, checked }) {
  const classes = useStyles();

  const url = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=';
  const apikey = '9efb6c97e8e268c9ce4f3b1e5deb0731';

  useEffect(() => {
    axios.get(`${url}${apikey}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      })
  })

  return (
    <Collapse 
      in={checked}
      style={{transformOrigin: '0 0 0'}}
      {...(checked ? {timeout: 1000} : {})}
    >
      <div className={classes.root}>
        <div className={classes.card}>
          <Card
            className={classes.card}
            style={{background: 'rgba(0, 0, 0, 0.2)'}}
          >
          <div className={classes.media}>
            <CardMedia
                component= 'img'
                image= {weather.imageUrl}
                alt= 'weather'
                style={{background: 'rgba(0, 0, 0, 0.2)'}}
              />
          </div>
          <div className={classes.content}>
            <CardContent>
              <Typography 
                style={{fontSize: '2rem', fontFamily: 'Nunito', fontWeight: 'bold', color: '#edf2f4'}}
              >
                {weather.title}
              </Typography>
              <Typography
                style={{ fontSize: '1.2rem', fontFamily: 'Nunito', fontWeight: 'bold', color: '#f08080'}}
              >
                {weather.description}
              </Typography>
            </CardContent>
          </div>
          </Card>
        </div>
      </div>
    </Collapse>
  );
}