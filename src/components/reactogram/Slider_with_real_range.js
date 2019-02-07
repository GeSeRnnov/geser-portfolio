import React from 'react';
import PropTypes from 'prop-types';
// import { MDBRangeInput, MDBRow } from "mdbreact";
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

const styles = {
  root: {
    width: 300,
  },
  slider: {
    padding: '22px 0px',
  },
  track: {
  	background: '#32c77c',
  },	
  thumb: {
  	background: '#32c77c',
  },
  rlrange:{
  	width: 300,
  	position: 'absolute',
  	height: '35px',
  	zIndex: '5',
  	opacity: '0.5',
  	marginTop: '-38px',
  }
};


// function Slider({ props }){

class MySlider extends React.Component {
  // state = {
  //   value: this.props.value,
  // };

  // localHandleChange = (event, value) => {
  //   this.setState({ value });

  // };

  // componentWillMount(){

  // }
	// const name = this.props.name;
  render() {
    const { classes } = this.props;
    // const { value } = this.state;
    // let range = this.state;

    return (
      <div className={classes.root}>
        <Typography id="label">{this.props.name}</Typography>
        <Typography id="label2">{this.props.value}</Typography>
        <Slider 
          classes={{ 
      		container: classes.slider,
          	track: classes.track, 
          	thumb: classes.thumb,
          }}
          value={this.props.value}          
          min={this.props.min}
          max={this.props.max}
          name={this.props.name}          
          aria-labelledby="label"
          onChange={this.localHandleChange}
          step={this.props.state}
        />
        <input 
        	type={"range"}
        	className={classes.rlrange}
        	min={this.props.min}
        	max={this.props.max}
          	name={this.props.name}
          	step={this.props.state}
          	value={this.props.value}
          	onChange={this.props.handleChange}

        />
      </div>
    );
  }
}

Slider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySlider);
		


// 
			// <MDBRow>
			// 	<MDBRangeInput
			// 		min={0}
			// 		max={100}
			// 		formClassName="w-25"

			// 	/>
			// </MDBRow>







