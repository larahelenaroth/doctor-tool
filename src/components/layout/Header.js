import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// CSS
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Info from '@material-ui/icons/Info';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/icons/List';
import Home from '@material-ui/icons/Home';

/* 
  Header on the footer of the mobile screen with links to:
    * Home
    * List of all tasks
    * Add new provider
    * About
*/

const useStyles = makeStyles(theme => ({
  logoLink: {
    width: 'auto',
    height: '50px'
  },
  appBar: {
    top: 'auto',
    bottom: 0
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  link: {
    width: '25%'
  },
  iconButton: {
    width: '100%'
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="fixed" color="default">
        <Toolbar className={classes.toolBar}>
          <Link to="/" className={classes.logoLink}>
            <img
              src="../../galileo_logo.jpg"
              alt="galileologo"
              className={classes.logoLink}
            />
          </Link>
        </Toolbar>
      </AppBar>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Link to="/" className={classes.link}>
            <IconButton color="inherit" className={classes.iconButton}>
              <Home />
            </IconButton>
          </Link>
          <Link to="/task-list" className={classes.link}>
            <IconButton
              edge="start"
              color="inherit"
              className={classes.iconButton}
            >
              <List />
            </IconButton>
          </Link>
          <Link to="/add-provider" className={classes.link}>
            <IconButton color="inherit" className={classes.iconButton}>
              <AddIcon />
            </IconButton>
          </Link>
          <Link to="/about" className={classes.link}>
            <IconButton
              edge="end"
              color="inherit"
              className={classes.iconButton}
            >
              <Info />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
