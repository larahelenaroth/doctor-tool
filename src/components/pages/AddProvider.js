import React from 'react';
// CSS
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

/* 
  Add provider to list of doctors (information given from API - could add on if neccessary):
    * First Name
    * Last Name
    * DOB
    * Degree
*/

const AddProvider = () => {
  const useStyles = makeStyles(theme => ({
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
  const classes = useStyles();
  return (
    <Container style={{ margin: '5% 0 20% 0' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Add Provider
      </Typography>
      <TextField
        id="outlined-uncontrolled"
        label="First Name"
        defaultValue=""
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-uncontrolled"
        label="Last Name"
        defaultValue=""
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-uncontrolled"
        label="Date of Birth"
        defaultValue=""
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="outlined-uncontrolled"
        label="Degree"
        defaultValue=""
        margin="normal"
        variant="outlined"
        fullWidth
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
};

export default AddProvider;
