import React from 'react';
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
  Purpose of Component:
*/

const useStyles = makeStyles(theme => ({
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
  },
  grow: {
    flexGrow: 1
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
    margin: '0 auto'
  }
}));

const Header = props => {
  const classes = useStyles();
  return (
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
          <IconButton edge="end" color="inherit" className={classes.iconButton}>
            <Info />
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
