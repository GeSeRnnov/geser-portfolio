import React from 'react';
import axios from 'axios';
// import { FilePond, File } from 'react-filepond';
// import  'filepond/dist/filepond.min.css';
// import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import { FormGroup, ControlLabel, FormControl, Form, Button, Col, Row, Grid } from 'react-bootstrap';
import { MDBBtn } from "mdbreact";

function FieldGroup({ id, label, ...props}) {
	return(
		<FormGroup controlId={id}>
			<ControlLabel>{label}</ControlLabel>
			<FormControl {...props}/>
		</FormGroup>
	);
}

// 

let pondRef = {};

class SendMail extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			files: [],
			name:'',
			email: '',
			text: ''
		};
		this.handleChangeNm = this.handleChangeNm.bind(this);
		this.handleChangeEml = this.handleChangeEml.bind(this);
		this.handleChangeTxt = this.handleChangeTxt.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		// this.sendMail = this.sendMail.bind(this);
	}


	handleInit(){
		// console.log('Filepont ready.' , this.pond);
	}

//villian_2007@mail.ru
// villian_2007@mail.ru

	handleSubmit(event){
		event.preventDefault();

		let recipient = 'villian_2007@mail.ru;gesernnov@gmail.com;' ;

		let dataMail = new FormData();
		dataMail.append('to', recipient);
		dataMail.append('subject', 'Attention! Have a mail from geser-portfolio.com');
		dataMail.append('message', 'Name: ' + this.state.name + '\n' + 
								'Email: ' + this.state.email + '\n' + 
								'Message: ' + this.state.text + '\n');

		return axios	
			.post('api/sendMail.php', dataMail)
			.catch(error => console.log('SndMl->error', error));
		// }
	}


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
		return(			

			<form name="submt" onSubmit={this.handleSubmit}>
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
							<FieldGroup
								id="formControlText"
								type="text"
								label="Name"
								placeholder="Enter name"
								onChange={this.handleChangeNm}
							/>
							<FieldGroup
								id="formControlEmail"
								type="email"
								label="Email"
								placeholder="Enter Email"
								onChange={this.handleChangeEml}
							/>
							
			    			<FormGroup controlId="formControlTextArea">								
								<FormControl onChange={this.handleChangeTxt} componentClass="textarea" placeholder="Enter text message." />
							</FormGroup>
						
				    		
						</Col>
					</Row>	
				</Grid>
				<br/>	
			</form>
		);
	}
};


export default SendMail;



// 
								// <ControlLabel>Сообщение</ControlLabel>

// 
// <FilePond ref={ref => {
// 									this.pond = ref;
// 									pondRef = ref;
// 									//
// 								}}
// 								allowMultiple={true}                       
// 								server="http://documentprepare.ru/api/"
// 								oninit={() => this.handleInit() }
// 								labelIdle = 'Перетащите сюда свои файлы/папки или <span class="filepond--label-action">Выберите их.</span>'

// 								onupdatefiles={(fileItems) => {
// 									// Set current file objects to this.state
// 									this.setState({
// 									  files: fileItems.map(fileItem => fileItem.file)
// 									});
// 								}}
// 							>		  

// 			                    {/* Update current files  */}
// 			                    {this.state.files.map(file => 
// 			                    	(
// 			                        <File key={file} src={file} origin="local" />
// 			                    ))}
// 			                </FilePond>	

// 			                