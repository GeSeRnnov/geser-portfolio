import React from 'react';
import axios from 'axios';
import { MDBBtn } from "mdbreact";
import { FormGroup, ControlLabel, FormControl, Form, Button, Col, Row, Grid } from 'react-bootstrap';

function FieldGroup({ id, label, ...props}) {
	return(
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props}/>
		</FormGroup>
	);
}

// 


const encode = (data) => {
return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

class SendMail extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			name:'',
			email: '',
			message: ''
		};
		this.handleChangeNm = this.handleChangeNm.bind(this);
		this.handleChangeEml = this.handleChangeEml.bind(this);
		this.handleChangeTxt = this.handleChangeTxt.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}


	handleInit(){
		// console.log('Filepont ready.' , this.pond);
	}


	handleSubmit(event){


		 fetch("/", {
	        method: "POST",
	        headers: { "Content-Type": "application/x-www-form-urlencoded" },
	        body: encode({ "form-name": "contact", ...this.state })
	      })
	        .then(() => alert("Mail sended!"))
	        .catch(error => alert(error));

	      event.preventDefault();
	}

	handleChange = e => this.setState({ [e.target.name]: e.target.value });

	handleChangeNm(event){
		this.setState({name: event.target.value});
	}
	handleChangeEml(event){
		this.setState({email: event.target.value});
	}
	handleChangeTxt(event){
		this.setState({text: event.target.value});
	}


	render(){
		const { name, email, message } = this.state;

		return(			
			<div>


			<form 
				data-netlify="true"
				name="contact" 
				method="post"
				onSubmit={this.handleSubmit}				
			>
				<Grid className="sendForm">
					<Row className="show-grid">
						<Col lg={4}>
							<br/>
							<MDBBtn variant="contained" type="submit" >Send</MDBBtn>
							<br/>
							<br/>
							<br/>
							<FormGroup component="div">
								<FormControl.Static>
									{this.props.formText}
									<br/>
									<br/>
									<i className="dataProcAgrmnt">
										Sending message, You give your agreement to processing filled data.
									</i>
								</FormControl.Static>
							</FormGroup>
						</Col>
					
						<Col lg={8} >
							<input type="hidden" name="form-name" value="contact" />
							

							<FieldGroup
								id="formControlText"
								type="text"
								label="Name"
								name="name"
								placeholder="Enter name"
								onChange={this.handleChangeNm}
							/>
							<FieldGroup
								id="formControlEmail"
								type="email"
								label="Email"
								name="email"
								placeholder="Enter Email"
								onChange={this.handleChangeEml}
							/>
							
			    			<FormGroup controlId="formControlTextArea">								
								<FormControl 
									onChange={this.handleChangeTxt} 
									componentClass="textarea" 
									name="message"
									placeholder="Enter text message." />
							</FormGroup>
						
				    		
						</Col>
					</Row>	
				</Grid>
				<br/>	
			</form>
			</div>
		);
	}
};


export default SendMail;


	