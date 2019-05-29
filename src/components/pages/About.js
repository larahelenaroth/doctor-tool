import React from 'react';
//CSS
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const About = () => {
  return (
    <Container style={{ margin: '5% 0 20% 0' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        About
      </Typography>
      <h6 className="">{`Background & Education`}</h6>
      <p className="">
        I was born in San Francisco, CA and raised between Canada, Minneapolis,
        and New York. After graduating high school, I moved to Canada to pursue
        statistics in college. After one year, I moved to New York to be closer
        to family. At Baruch College (CUNY), I graduated with a bachelors in
        Statistics and Quantitative Modeling with special permission to make
        half of my major a computer science degree. I also graduated with a
        minors in Women and Gender Studies.
      </p>
      <h6 className="">Professional Experience</h6>
      <p>
        In college, I worked and had three internships. The last internship
        became a full-time job after graduation with one month off to travel in
        between. I was the head of the development team for the Americas at{' '}
        <a href="https://skimgroup.com/">SKIM</a>, mainly focusing on the
        front-end shopping simulation and experience respondents would interact
        with for market research insights. I single-handedly developed the
        interaction for a new methodology that was piloted while I was working
        there.
      </p>
      <p>
        In July of 2018, I started a new position with{' '}
        <a href="https://www.fitchratings.com/site/home">Fitch</a> as a
        developer in Operations. There, I concentrated on the data side of
        application development. I consulted internally to create new schemas,
        replacing legacy application dependencies for the new process automation
        I was developing. The processes I alone automated saved analysts about
        50% of their time per committee as well as saved the firm about one
        million dollars in the process.
      </p>
      <p>
        My old bosses from SKIM joined the advanced analytics team at{' '}
        <a href="https://www.loreal.com/">L'Oréal</a>. They asked me to contract
        for them to build a reusable shopping platform to collect insights into
        marketing, similar to my first full-time professional role. Utilizing
        weekends and free weeknights, I collaborated with the team at L'Oréal to
        deliver a analyst and respondent friendly data collection tool with a
        nice UI.
      </p>
      <h6 className="">Personal</h6>
      <p>
        Growing up, I was a classicly trained ballet dancer. I attended the{' '}
        <a href="https://www.joffreyballetschool.com/">Joffrey Ballet School</a>{' '}
        here in New York, as well as the{' '}
        <a href="https://www.rwb.org/">Royal Winnipeg Ballet School</a>. My home
        studio, <a href="https://hopkinsdance.com/">Hopkins Dance Center</a> is
        where I would call the studio home. Currently, I plan to complete my
        yoga teacher training certificate by the end of 2019 with the vision of
        teaching at least one class a week and maintain a fitness lifestyle
        attending Steps on Broadway every so often and eating well. I am a proud
        mother of Lieba the black cat and maintain a very close relationship
        with my brother, sister, and mother.
      </p>
    </Container>
  );
};

export default About;
