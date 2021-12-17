import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Collapse, Grow } from "@material-ui/core";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
    fontFamily: 'Indie Flower',
  },
  appbar: {
    background: 'rgba(0, 0, 0, 0.4)',
    fontFamily: 'Indie Flower',
  },
  appbarWrapper: {
    margin: '0 auto',
  },
  appbarTitle: {
    fontSize: '2.5rem'
  },
  container: {
    textAlign: 'center'
  },
  title: {
    color: '#edf2f4',
    fontSize: '5.5rem'
  },
  colorText: {
    color: '#ff4d6d'
  }
}));

function Header() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, [])

  return(
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Peace<span className={classes.colorText}> Love</span> Holla
          </h1>
        </Toolbar>
      </AppBar>

      <div className={classes.container}>
        <Collapse
          in={checked}
          style={{transformOrigin: '0 0 0'}}
          {...(checked ? {timeout: 1000} : {})}
        >
          <h1 className={classes.title}>
            Peace <span className={classes.colorText}>Love </span>Holla
          </h1>
        </Collapse>

        <Scroll to='weather' smooth={true}>
          <Grow
            in={checked}
            style={{transformOrigin: '0 0 0'}}
            {...(checked ? {timeout: 1000} : {})}
          >
            <KeyboardArrowDownRoundedIcon
              style={{fontSize: '6.5rem', color: '#ff4d6d'}}
            />
          </Grow> 
        </Scroll>
        
      </div> 
    </div>
  )
}

export default Header;
