import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { LinearProgress } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    
    // height: '100px'
    // maxWidth: "100%",
    // height: 300 
    // padding: "-10px"
  },
  // media: {
  //   height: 0,
  //   paddingTop: '56.25%', // 16:9
  // },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30',
  },
  review: {
    width: "400px"
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [value, setValue] = React.useState('Controlled');

  const handleChange = event => {
    setValue(event.target.value);
  };

  

  return (
    <div >
      <Card className={classes.root}>
        <CardHeader
          action={
            // <IconButton aria-label="settings">
            //   <MoreVertIcon />
            // </IconButton>
            <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
          }
          title={
            <Typography gutterBottom variant="h6">
              {props.plan.placeName}
            </Typography>
            }
          subheader={props.plan.address}
        />
        <CardMedia
          className={classes.media}
          square
          image={props.plan.imageURL}
          title="Paella dish"
        />
        <CardContent>
        <Typography paragraph>{props.plan.placeInformation}</Typography>
        </CardContent>

        <CardActions disableSpacing>
          {/* <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton> */}
        </CardActions>

        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {"Duration: " + props.plan.duration + "h"}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {"OpenTime: " + props.plan.openTime}
          </Typography>
          <TextField className={classes.review}
          id="outlined-multiline-static"
          label="Please leave your review"
          multiline
          rows="4"
          defaultValue=""
          variant="outlined"
        />
        
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
