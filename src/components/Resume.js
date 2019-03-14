import React, {Component } from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ResumeCard from './ResumeCard';
import axios from 'axios'

export default class Resume extends Component {
	constructor(){
		super();

		this.state = {
			stateContent:  [{
					icon: '',
					category: '',
					cardHeader: '',
					cardContent: {},
				}]
		}
		
		this.fetchData = this.fetchData.bind(this);
	}

	// Fetching data from the server
	fetchData = () => {
		axios.get('https://www.geser-portfolio.com/api/getSkills.php')
			.then(res => {
				this.setState({ stateContent: res.data})
			})
			.catch(err => {
				console.log('Network error. Error: ', err);
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


