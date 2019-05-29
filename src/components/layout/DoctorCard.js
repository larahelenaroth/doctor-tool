import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// CSS
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

const DoctorCard = props => {
  const { doctor } = props;
  const useStyles = makeStyles(theme => ({
    card: {
      minWidth: 275,
      margin: '2px 0'
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)'
    },
    title: {
      fontSize: 14
    },
    pos: {
      marginBottom: 12
    }
  }));
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {doctor.doctor_id}
        </Typography>
        <Typography variant="h5" component="h2">
          {doctor.first_name} {doctor.last_name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {doctor.degree}
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          {doctor.dob}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/doctor/${doctor.doctor_id}`}>
          <Button size="small" style={{ cursor: 'pointer' }}>
            View Tasks
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

DoctorCard.propTypes = {
  // PROPS
  doctor: PropTypes.object.isRequired
};

export default DoctorCard;
