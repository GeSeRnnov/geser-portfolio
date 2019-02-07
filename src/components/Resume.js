import React from 'react';
// import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ResumeCard from './ResumeFlipCard';
// import Icon from '@material-ui/core/Icon';


export default function Resume() {
	
	const contentPersonalData = [];
	contentPersonalData["First name"] = "George";
	contentPersonalData["Last Name"] = "Rukomin";
	contentPersonalData["Gender"] = "male";
	contentPersonalData["Age"] = "33";
	contentPersonalData["Country"] = "Russian Federation";
	contentPersonalData["City"] = "Nizhny Novgorod";
	contentPersonalData["E-mail"] = "gesernnov@gmail.com";

	const contentObjective = [];
	contentObjective["Front-end engineer"] = "-	React web-app developing;";
	contentObjective["_hide2"] = "-	Maintaining existing projects;";
	
	const contentKeySkills = [];
	contentKeySkills["Front-end"] = "- ReactJS";
	contentKeySkills["_hide2"] = "- JavaScript";
	contentKeySkills["_hide3"] = "- JQuery";
	contentKeySkills["_hide4"] = "- CSS(SASS)";
	contentKeySkills["_hide15"] = "_hide";
	contentKeySkills["Back-end"] = "- Node.js";
	contentKeySkills["_hide8"] = "- PHP";
	contentKeySkills["_hide9"] = "- MySQL";
	contentKeySkills["_hide16"] = "_hide";
	contentKeySkills["Other"] = "- Github";
	contentKeySkills["_hide11"] = "- MS SQL Server";
	contentKeySkills["_hide12"] = "- MS SSAS";
	contentKeySkills["_hide13"] = "- MS SSRS";
	contentKeySkills["_hide14"] = "- MS SSIS";

	const contentEducation = [];
	contentEducation["First education:"] = "_hide_underline";
	contentEducation["University"] = "Lobachevsky University";
	contentEducation["Site"] = "http://eng.unn.ru";
	contentEducation["Faculty"] = "Radiophysical";
	contentEducation["Graduation year"] = "2010";
	contentEducation["_hide"] = "_hide";
	contentEducation["Second education:"] = "_hide_underline";
	contentEducation["University "] = "Lobachevsky University";
	contentEducation["Site "] = "http://eng.unn.ru";
	contentEducation["Faculty "] = "Finansial";
	contentEducation["Graduation year "] = "2012";
	

	const cardsContent = {
		personalData: {
			icon: 'account_box',
			cardHeader: 'Personal details',
			cardContent: contentPersonalData,
		},
		objective: {
			icon: 'gps_fixed',
			cardHeader: 'Objective',
			cardContent: contentObjective,
		},
		keySkills: {
			icon: 'thumb_up',
			cardHeader: 'Key skills',
			cardContent: contentKeySkills,
		},
		education: {
			icon: 'assignment',
			cardHeader: 'Education',
			cardContent: contentEducation,
		},
	};



	return(
		<MDBContainer  style={{}} fluid>
			<MDBRow className="text-center py-5">
				<MDBCol md="12">
						<h1 className="display-2" style={{textShadow: '5px 5px 10px #666'}} >
							Resume
						</h1>						
				</MDBCol>
			</MDBRow>
			<MDBRow className="text-left py-5 px-0 mx-0">
				<MDBCol md="1">
				</MDBCol>
				<MDBCol md="4">
					<ResumeCard content={cardsContent.personalData} />
				</MDBCol>
				<MDBCol md="1">
				</MDBCol>
				<MDBCol md="1">
				</MDBCol>
				<MDBCol md="4">
					<ResumeCard content={cardsContent.objective}  />
				</MDBCol>
				<MDBCol md="1">
				</MDBCol>
			</MDBRow>

			<MDBRow className="text-left py-5 px-0 mx-0">
				<MDBCol md="1">
				</MDBCol>
				<MDBCol md="4">
					<ResumeCard content={cardsContent.keySkills}  />
				</MDBCol>
				<MDBCol md="1">
				</MDBCol>
				<MDBCol md="1">
				</MDBCol>
				<MDBCol md="4">
					<ResumeCard content={cardsContent.education}  />
				</MDBCol>
				<MDBCol md="1">
				</MDBCol>
			</MDBRow>

		</MDBContainer>
	);
};