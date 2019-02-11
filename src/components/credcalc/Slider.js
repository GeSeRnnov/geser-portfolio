import React from 'react';
import PropTypes from 'prop-types';
// import { MDBRangeInput, MDBRow } from "mdbreact";
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const styles = {
  root: {
    width: '100%',
  },
  slider: {
    padding: '1em 0px',
  },
  track: {
  	background: '#32c77c',
  },	
  thumb: {
  	background: '#32c77c',
  },
  
};

class MySlider extends React.Component {
  
  render() {
    const { classes } = this.props;
	let isPeriod = this.props.valType === 'period';
	let years = () => {switch(Math.floor(this.props.value/12)){
		case 0: 
			return '';
		case 1: 
			return '1 year';
		default: 
			return Math.floor(this.props.value/12) + ' years';

	}};
	let months = () => {switch(this.props.value%12){
		case 0: 
			return '';
		case 1: 
			return '1 month';		
		default: 
			return this.props.value%12 + ' months';

	}};
    let formatValue = isPeriod ? months() + ' ' + years() : this.props.value;

    return (
      <div>
      
	      <MDBContainer className="pt-1 mx-0" fluid>
	      	<MDBRow className="px-0 mx-0"> 
	      		<MDBCol className="text-left px-0 mx-0" lg="3">{this.props.label || this.props.name }</MDBCol>
	      		<MDBCol className="text-right px-0 mx-0" lg="9">{formatValue}</MDBCol>
	      	</MDBRow>
	      </MDBContainer>
	      <div className={classes.root}>
		      <div className="mySlider">
			      <div>
			      <div>
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
					  id={'id_' + this.props.name }
					  needref={this.props.name + '_ref'}
			          aria-labelledby="label"
			          onChange={(e, vl) => {
			          	// console.log(this.props.name);
			          	this.props.handleChange(e, vl, this.props.name);
			          }}
			          step={this.props.step}
			        />
			       
			      </div>
			      </div>
		      </div>
	      </div>
      </div>
    );
  }
}

Slider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySlider);
		

// 
        // <Typography id="label">{this.props.name}</Typography>
        // <Typography id="label2">{this.props.value}</Typography>


			// <MDBRow>
			// 	<MDBRangeInput
			// 		min={0}
			// 		max={100}
			// 		formClassName="w-25"

			// 	/>
			// </MDBRow>



 // <input 
	//         	type={"range"}
	//         	className={classes.rlrange}
	//         	min={this.props.min}
	//         	max={this.props.max}
	//           	name={this.props.name}
	//           	step={this.props.state}
	//           	value={this.props.value}
	//           	onChange={this.props.handleChange}

	//         />
// rlrange:{
//   	width: 300,
//   	position: 'absolute',
//   	height: '35px',
//   	zIndex: '5',
//   	opacity: '0.5',
//   	marginTop: '-8px',
//   }

// state = {
//     value: this.props.value,
//   };

//   localHandleChange = (event, value) => {
//     this.setState({ value });
//     console.log('kolbasa');
//     this.props.handleChange();
//   };

//   // componentWillMount(){

//   // }
// 	// const name = this.props.name;
    // const { value } = this.state;
    // let range = this.state;



