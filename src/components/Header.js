import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";
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
    flexGrow: '1',
    fontSize: '2.5rem'
  },
  container: {
    textAlign: 'center'
  },
  title: {
    color: '#fff',
    flexGrow: '1',
    fontSize: '5rem'
  },
  colorText: {
    color: '#ff4d6d'
  },
  goDown: {
    color: '#ff4d6d'
  }
}));

function Header() {
  const classes = useStyles();
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
        <h1 className={classes.title}>
          Peace <span className={classes.colorText}>Love </span>Holla
        </h1>
        <KeyboardArrowDownRoundedIcon className={classes.goDown} fontSize='large'/>
      </div>

    </div>
  )
}

export default Header;
