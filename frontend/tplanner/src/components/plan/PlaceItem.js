import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
  root: {
    // width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
      margin: theme.spacing(0, 0.5),
    },
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  rating: {
    // display: 'flex',
    // flexDirection: 'column',
    // '& > * + *': {
    //   marginTop: theme.spacing(1),
    // },
    width: '50px'
  }
}));

const Button = styled.button`
border: 1px solid #29C9DE;
border-radius: 20px;
padding: 10px 20px;
background: #29C9DE;
color: #F8F8F8;
cursor: pointer;
min-width: 100px;
font-size: medium;
`

const Container = styled.div`
  margin-left: 1%;
  margin-right: 1%; 
  z-index: 1;
  border-style: groove;
`

const IMG = styled.img`
  width: 100%;
  // height: 100%

  // paddingBottom: '56.25%',
  // object-fit: fill
  // width: 180px;
  height: 140px;
  object-fit: cover;
`

const Left = styled.div`
  width: 45%;
  margin: 1%;
`

const Right = styled.div`
  width: 53%;
`

const Title = styled.p`
  font-weight: 350;
  color: black;
  margin: 0 5px;
  text-align: right;
`

const Body = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  color: #686868;
  margin: 0 5px;
  text-align: right;
`

const Star = styled.p`
  text-align: right;
`

function returnStar(rating) {
  var ret = "";
  while(rating > 0) {
    ret = ret + "⭐";
    rating -= 1;
  }
  return ret;
}



export default function PlanItem(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(2);

  const [checked, setChecked] = React.useState(true);

  const handleChange = event => {
    setChecked(event.target.checked);
  };

  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        {/* <div>
        <Checkbox
        defaultChecked
        value="secondary"
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
        </div> */}
        <Left>
          <IMG className="city-view" src={props.place.imageURL}/>
          <Divider orientation="vertical" flexItem />
        </Left>
        <Right>
          <Title>{props.place.placeName}</Title>
          <Star>{returnStar(props.place.rating)}</Star>
          <Body>{"Location: " + props.place.address}</Body>
          {/* <Rating name="read-only" value={props.place.rating} className={classes.rating} size="small" readOnly /> */}


          {/* <div>
          <Button variant="outlined" size="small" color="secondary" className={classes.margin} >
          Add
          </Button>
          <Button variant="outlined" size="small"  className={classes.margin} >
          Delete
          </Button>
          </div> */}

          <div class="text-right"> 
            <button type="button" class="btn btn btn-outline-primary btn-small" style={{marginRight: '10px'}} >Add</button> 
            <button type="button" class="btn btn-outline-secondary btn-small">Delete</button> 
          </div> 

        </Right>
      </Grid>
    </div>
  );
}

// export default class PlanItem extends Component {
//   render() {
//     return (
//       <Container className="plan">
//             <di></di>
//                 <IMG className="city-view" src={this.props.place.imageURL}/>
//                 <h3>{this.props.place.placeName}</h3>
//                 <h4>{"Address: " + this.props.place.address}</h4>
//             </div>
//         </Container>
//     )
//   }
// }
