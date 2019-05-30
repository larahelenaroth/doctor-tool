import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// ACTIONS
import { getTasks } from '../../actions/docActions';
//CSS
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

/* 
  View all tasks for all doctors (Assuming sorted by owner, priority)
    * Task
    * Task ID
    * Owner
    * Priority
*/

class TaskList extends Component {
  useStyles = makeStyles(theme => ({
    root: {
      width: '100%'
    },
    table: {
      width: '100%'
    }
  }));

  createData = (task_id, owner, priority) => {
    return { task_id, owner, priority };
  };

  componentDidMount() {
    this.props.getTasks();
  }

  render() {
    const classes = this.useStyles;
    const { tasks } = this.props;
    return (
      <Container style={{ margin: '5% 0 20% 0' }} className={classes.root}>
        <Typography variant="h5" component="h2" gutterBottom>
          Task List
        </Typography>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Task</TableCell>
              <TableCell align="right">Task ID</TableCell>
              <TableCell align="right">Owner</TableCell>
              <TableCell align="right">Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map(task => (
              <TableRow key={task.task_id}>
                <TableCell component="th" scope="row">
                  {task.task_id}
                </TableCell>
                <TableCell align="right">{task.task_id}</TableCell>
                <TableCell align="right">{task.owner}</TableCell>
                <TableCell align="right">{task.priority}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    );
  }
}

TaskList.propTypes = {
  // STATE
  tasks: PropTypes.array.isRequired,
  // EVENTS
  getTasks: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tasks: state.doc.tasks
});

export default connect(
  mapStateToProps,
  { getTasks }
)(TaskList);
