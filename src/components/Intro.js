import React from 'react';
// import PropTypes from 'prop-types';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";



export default function Intro() {
	return(
		<div>
			<MDBContainer className="text-left py-5" style={{minHeight: '80vh'}} >
				<MDBRow>
					<MDBCol md="12">
						<div className="tabIntroText">
							<div className="tabIntroHeader">
								At these tabs you can see some examples of my works.
							</div>
							<p>
								I'm a beginner front-end developer and I'm learning all the time, and my skills are constantly growing.
								So, my speed and quality of development is growing too. 
							</p>
							<p>
								In web building I'm developing not only front-end part. 
								Server side, also is developed by using PHP or NodeJS. But particularly this site is developed by using serverless technology.
							</p>

							<p>
								You can see sources of this site <a href="https://github.com/GeSeRnnov/geser-portfolio.git">here</a>. 
								If these examples are good enough for you, and you want something similar for your project, you can hire me.
								Just fill out the form and send me a message at the bottom of the page.
							</p>
							<br/>
						</div>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		</div>
	);
};