// import React, { Component } from 'react';
// import { Route, withRouter } from 'react-router-dom';
// import { connect } from 'react-redux';
// import Planitem from './Planitem';
// import './Dashboard2.css';

// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';



// const useStyles = makeStyles({
//     root: {
//         maxWidth: 345,
//     },
//     media: {
//         height: 140,
//     },
// });

// export default function Planlist() {
//     const cityUrl = "https://img.theculturetrip.com/768x432/wp-content/uploads/2015/11/PHOTO-4_THE-TURBULENT-HISTORY-OF-THE-PALACE-OF-FINE-ARTS-1.jpg"
//     const classes = useStyles();
  
//     return (
//       <Card className={classes.root}>
//         <CardActionArea>
//           <CardMedia
//             className={classes.media}
//             image=cityUrl
//             title="Contemplative Reptile"
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="h2">
//               Lizard
//             </Typography>
//             <Typography variant="body2" color="textSecondary" component="p">
//               Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
//               across all continents except Antarctica
//             </Typography>
//           </CardContent>
//         </CardActionArea>
//         <CardActions>
//           <Button size="small" color="primary">
//             Share
//           </Button>
//           <Button size="small" color="primary">
//             Learn More
//           </Button>
//         </CardActions>
//       </Card>
//     );
//   }





export default class Planlist extends Component {

  render() {
    //   const plan = this.props.plans
    //         .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))

      return (
          <div>
              {
                  this.props.plans.map((i) => {
                      return <Planitem value={i} />
                  })
              }
          </div>
      )
  }
}
