import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    maxWidth: 600,
    background: 'rgba(0, 0, 0, 0.2)'
  },
  media: {
    height: 400
  }
});

export default function WeatherCard() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Card
          className={classes.card}
          style={{background: 'rgba(0, 0, 0, 0.2)'}}
        >
          <CardMedia
            className={classes.media}
            image= {process.env.PUBLIC_URL + '/assets/bg.jpg'}
            alt="weather"
          />
          <CardContent>
            <Typography 
            style={{fontSize: '3rem', fontFamily: 'Nunito', fontWeight: 'bold', color: '#edf2f4'}}
            >
              Today's Weather
            </Typography>
            <Typography
            style={{ fontSize: '1.8rem', fontFamily: 'Nunito', fontWeight: 'bold', color: '#f08080'}}
            >
              Expect mostly cloudy weather with scattered showers
            </Typography>
          </CardContent>
        </Card>
      </div>
      
    </div>
  );
}