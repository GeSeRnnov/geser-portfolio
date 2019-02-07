import React from 'react';
// import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


export default function Resume() {
	return(
		<MDBContainer className="text-left py-5" style={{minHeight: '70vh'}} >
				<MDBRow>
					<MDBCol md="12">
							<h2>Resume.</h2>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
	);
};