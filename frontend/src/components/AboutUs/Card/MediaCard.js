import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 280,
  },
});

const MediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.image} title={props.name} data-testid="image-test" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" component="p">
            {props.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <div>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <GitHubIcon
            onClick={() => {
              window.open(props.github);
            }}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TwitterIcon
            onClick={() => {
              window.open(props.twitter);
            }}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <LinkedInIcon
            onClick={() => {
              window.open(props.linkedin);
            }}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmailIcon
            onClick={() => {
              window.open(props.gmail);
            }}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <InstagramIcon
            onClick={() => {
              window.open(props.insta);
            }}
          />
        </div>
      </CardActions>
    </Card>
  );
};

export default MediaCard;
