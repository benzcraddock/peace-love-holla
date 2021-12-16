import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Collapse, Grow } from "@material-ui/core";
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';

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
    background: 'none',
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
    color: '#fff',
    fontSize: '5rem'
  },
  colorText: {
    color: '#ff4d6d'
  },
  goDown: {
    color: '#ff4d6d',
  }
}));

function Header() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, [])

  return(
    <div className={classes.root}>
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

        <Grow
          in={checked}
          style={{transformOrigin: '0 0 0'}}
          {...(checked ? {timeout: 1000} : {})}
        >
          <KeyboardArrowDownRoundedIcon className={classes.goDown} fontSize='large'/>
        </Grow> 
      </div> 
    </div>
  )
}

export default Header;
