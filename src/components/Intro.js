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
								At this tabs you can see some examples of my works.
							</div>
							<p>
								I'm a beginner front-end developer. 
								So, my speed of development is not as high as I would like. 
								But I'm learning all the time, and my skills are growing.
							</p>
							<p>
								In web building I'm developing not only front-end part. 
								Server side, also is developing by using PHP or NodeJS.								
							</p>

							<p>
								Sousrces of this site you can see <a href="https://github.com/GeSeRnnov/geser-portfolio.git">here</a>.
							</p>
							<br/>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
};