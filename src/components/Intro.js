import React from 'react';
// import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



export default function Intro() {
	return(
		<div>
			<MDBContainer className="text-left py-5" style={{minHeight: '70vh'}} >
				<MDBRow>
					<MDBCol md="12">
						<div className="tabIntroText">
							<div className="tabIntroHeader">
								At this tabs you can see some examples of my skills.
							</div>
							<p>
								I'm a beginner front-end developer. 
								So, my speed of development is not as high as I would like. 
								But I'm learning all the time and my skills are growing.
							</p>
							<p>
								In web building I develop not only front-end part. 
								Server side, also is developing by using PHP or NodeJS.								
							</p>
							<br/>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
};