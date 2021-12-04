import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: 'none',
    fontFamily: 'Indie Flower',
  },
  appbarWrapper: {
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    fontSize: '4.5rem'
  },
  colorText: {
    color:"#fff"
  }
}));

function Header() {
  const classes = useStyles();
  return(
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            Peace<span className={classes.colorText}> Love</span> Holla
          </h1>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header;
