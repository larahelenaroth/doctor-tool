import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ACTIONS
import { getDocInfo } from '../../actions/docActions';
//CSS
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';

/* 
  Display doctor information:
    * ID
    * First & Last Name
    * DOB
    * Degree
  Add task capability
  View Tasks for provider (Assuming sorted by priority):
    * Priority
    * Task ID (thought name)
    * Checkbox
*/

class DoctorTasks extends Component {
  componentDidMount() {
    const { doctor_id } = this.props.match.params;
    this.props.getDocInfo(doctor_id);
  }
  useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  }));
  render() {
    const classes = this.useStyles;
    const { viewDoctor } = this.props;
    const select = new Array(viewDoctor.tasks.length);
    const taskSelected = select.fill(false, 0);
    console.log(taskSelected);
    console.log(viewDoctor.tasks.length);
    return (
      <Container style={{ margin: '5% 0 20% 0' }}>
        <Typography className={classes.title} color="textSecondary">
          {viewDoctor.info.doctor_id}
        </Typography>
        <Typography variant="h5" component="h2">
          {viewDoctor.info.first_name} {viewDoctor.info.last_name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {viewDoctor.info.dob}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" gutterBottom>
          {viewDoctor.info.degree}
        </Typography>
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            alignItems: 'center',
            justifyContent: 'space-evenly'
          }}
        >
          <TextField
            id="add-task"
            label="Add Task"
            placeholder=""
            margin="normal"
            style={{ width: '75%' }}
            InputLabelProps={{
              shrink: true
            }}
          />
          <Fab color="primary" aria-label="Add" style={{ float: 'right' }}>
            <AddIcon />
          </Fab>
        </div>

        <List className={classes.root}>
          {viewDoctor.tasks.map((task, index) => (
            <ListItem key={task.task_id} button>
              <ListItemText primary={`${task.priority}: ${task.task_id}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  color="secondary"
                  onChange={() => {
                    taskSelected[index] = !taskSelected[index];
                  }}
                  value={taskSelected[index]}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Container>
    );
  }
}
DoctorTasks.propTypes = {
  // STATE
  viewDoctor: PropTypes.object.isRequired,
  // EVENTS
  getDocInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  viewDoctor: state.doc.viewDoctor
});

export default connect(
  mapStateToProps,
  { getDocInfo }
)(DoctorTasks);
