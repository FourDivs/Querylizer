import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

//svgs
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/linkedin.svg';
import { ReactComponent as GitHubIcon } from '../../../assets/icons/github.svg';
import { ReactComponent as EmailIcon } from '../../../assets/icons/email.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/icons/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/icons/instagram.svg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 280,
  },
  icons: {
    height: 25,
  },
});

const MediaCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.name}
          data-testid="image-test"
        />
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
            className={classes.icons}
            onClick={() => {
              window.open(props.github);
            }}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <TwitterIcon
            className={classes.icons}
            onClick={() => {
              window.open(props.twitter);
            }}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <LinkedInIcon
            className={classes.icons}
            onClick={() => {
              window.open(props.linkedin);
            }}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <EmailIcon
            className={classes.icons}
            onClick={() => {
              window.open(props.gmail);
            }}
          />{' '}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <InstagramIcon
            className={classes.icons}
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
