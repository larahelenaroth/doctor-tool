import React, { Component } from 'react';
// CSS
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

class AddProvider extends Component {
  useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    button: {
      margin: theme.spacing(1)
    },
    rightIcon: {
      marginLeft: theme.spacing(2)
    },
    iconSmall: {
      fontSize: 20
    }
  }));
  render() {
    const classes = this.useStyles;
    return (
      <Container style={{ margin: '5% 0 20% 0' }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Add Provider
        </Typography>
        <TextField
          id="outlined-uncontrolled"
          label="First Name"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={this.searchChange}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Last Name"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={this.searchChange}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Date of Birth"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={this.searchChange}
        />
        <TextField
          id="outlined-uncontrolled"
          label="Degree"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={this.searchChange}
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          style={{ float: 'right', marginTop: '5px' }}
        >
          Save Provider
          <SaveIcon className={clsx(classes.rightIcon, classes.iconSmall)} />
        </Button>
      </Container>
    );
  }
}

export default AddProvider;
