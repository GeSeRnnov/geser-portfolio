import React, { Component } from 'react';
import MySlider from './Slider'
import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { FormControl} from 'react-bootstrap';


export default class CredInputs extends Component{

	render(){
		const { inputs, handleChange, handleRateChange, handleCalculate, handleReset } = {...this.props}
		return(
			<aside className="reactoSettings">
				<MySlider className="reactoSlider" name="creditsum" label='Amount' value={inputs['creditsum']} min={30000} max={5000000} step={50000}  handleChange={handleChange}  />
				<MySlider className="reactoSlider" name='period' label='Period' valType="period" value={inputs['period']} min={3} max={180} step={1}  handleChange={handleChange}  />
				<MDBContainer className="pt-1 mx-0" fluid>
			      	<MDBRow className="px-0 mx-0 mb-5"> 
			      		<MDBCol className="text-left px-0 mx-0" lg="4">
			      			Rate, %
			      		</MDBCol>
			      		<MDBCol className="text-left px-0 mx-0" lg="5">
			      		</MDBCol>
			      		<MDBCol className="jusify-content-end text-right px-0 mx-0" lg="3">
							<FormControl
								type="text"
								name="rate"
								placeholder=""								
								id = "ratevalue"
								onChange={e => handleRateChange(e.target.value) }
								className="text-right"
								style={{  height: '1.5em', padding: '0px', margin: '0px' }}
								defaultValue={inputs['defaultRate']}
								pattern='[0-9]'
							/>	      			
			      		</MDBCol>
			      		{ inputs.rateError ? <div style={{fontSize: '.75em', width:'100%', textAlign: 'end', color: 'red'}} > {inputs.rateError}</div> : null }
			      	</MDBRow>
		    	</MDBContainer>
		      
				<MDBBtn  
					onClick={handleCalculate} 
					className="my-2"
					title={"This loan calculator will help you determine the monthly payments on a loan. " + 
						"Simply enter the loan amount, term and interest rate in the fields and click calculate. " + 
						"This calculator can be used for mortgage, auto, or any other fixed loan types."} 
				>
					calculate
				</MDBBtn>

				<MDBBtn  
					onClick={handleReset} 
					className="my-2"
				>
					Reset
				</MDBBtn>		
			</aside>
		);
	}
};


