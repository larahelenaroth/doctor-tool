import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ACTIONS
import { getDoctors, searchDoctors } from '../../actions/docActions';
// COMPONENTS
import DoctorCard from '../layout/DoctorCard';
//CSS
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

/* 
  Purpose of Component:
*/

class Search extends Component {
  componentDidMount() {
    this.props.getDoctors();
  }
  searchChange = e => {
    e.preventDefault();
    const searchText = e.target.value;
    this.props.searchDoctors(searchText);
  };
  useStyles = makeStyles(theme => ({
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    }
  }));
  render() {
    const classes = this.useStyles;
    const { doctors } = this.props;
    return (
      <Container style={{ margin: '5% 0 20% 0' }}>
        <Typography variant="h5" gutterBottom>
          Doctor List
        </Typography>
        <TextField
          id="outlined-uncontrolled"
          label="Search Name"
          defaultValue=""
          className={classes.textField}
          margin="normal"
          variant="outlined"
          fullWidth
          onChange={this.searchChange}
        />
        {doctors.map(doc => (
          <DoctorCard key={doc.doctor_id} doctor={doc} />
        ))}
      </Container>
    );
  }
}

Search.propTypes = {
  // STATE
  doctors: PropTypes.array.isRequired,
  // EVENTS
  getDoctors: PropTypes.func.isRequired,
  searchDoctors: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  doctors: state.doc.doctors
});

export default connect(
  mapStateToProps,
  { getDoctors, searchDoctors }
)(Search);
