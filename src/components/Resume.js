import React, {Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ResumeCard from './ResumeCard';
import { cardsContent } from './ResumeText.js'

export default class Resume extends Component {
	constructor(){
		super();

		this.state = {
			stateContent:  [{
					icon: '',
					category: '',
					cardHeader: '',
					cardContent: [],
				}]
		}
		
		this.fetchData = this.fetchData.bind(this);
	}

	// Fetching data from the server
	fetchData = () => {
		const getData = new Promise(resolve => {
			resolve(cardsContent)
		})

		getData
			.then( result => {
				this.setState({ stateContent: result})
				// setInterval(() => this.setState({ stateContent: result}), 1000)
			})
			.catch(error => {
				console.log('The server error has occurred. Error: ', error);
			})
	}

	componentDidMount(){
		this.fetchData();
	}

	render(){

		return(
			<MDBContainer  style={{}} fluid>
				<MDBRow className="text-center py-5">
					<MDBCol md="12">
						<h1 className="resumeHeader display-2" >
							Resume
						</h1>						
					</MDBCol>
				</MDBRow>

				<MDBRow className="text-left py-2 px-0  mx-0">
					<MDBCol md="1"></MDBCol>
					<MDBCol md="4" className="text-left py-2  px-0  mx-0" >
						<ResumeCard content={this.state.stateContent} category={'personalData'} />
					</MDBCol>
					<MDBCol md="1"></MDBCol>
					<MDBCol md="1"></MDBCol>
					<MDBCol md="4" className="text-left py-2 px-0  mx-0">
						<ResumeCard content={this.state.stateContent} category={'objective'}  />
					</MDBCol>
					<MDBCol md="1"></MDBCol>
				</MDBRow>

				
				<MDBRow className="text-left py-5 px-0 mx-0">
					<MDBCol md="1"></MDBCol>
					<MDBCol md="4" className="text-left py-2 px-0  mx-0">
						<ResumeCard content={this.state.stateContent} category={'keySkills'}  />
					</MDBCol>
					<MDBCol md="1"></MDBCol>
					<MDBCol md="1"></MDBCol>
					<MDBCol md="4" className="text-left py-2 px-0  mx-0">
						<ResumeCard content={this.state.stateContent} category={'education'}  />
					</MDBCol>
					<MDBCol md="1"></MDBCol>
				</MDBRow>
				
			</MDBContainer>
		);
}
};


