import React, { Component } from 'react';
import { MDBJumbotron, MDBRow, MDBCol, MDBContainer } from "mdbreact";

class ShortIntro extends Component {
 

state = {
  collapsed: false
};

handleTogglerClick = () => {
  this.setState({ collapsed: !this.state.collapsed });
};

render() {
  return(
    <MDBContainer className=" mt-lg-5">
      <MDBJumbotron className="HelloJumbo py-0">  
        <MDBRow className=" py-5">
          <MDBCol md="12" className="">
            <h2 className="display-3 text-center" style={{textShadow: '5px 5px 10px #666'}} >
              Hello.
            </h2>
            <br/>
            <p className="lead text-left">
              My name is George and I am a React front-end developer. 
              I'm glad to welcome you at my portfolio site.
            <br/>
              Here you can find some information about me and my skills.
            </p>
          </MDBCol>
        </MDBRow>
      </MDBJumbotron>  
    </MDBContainer>
  );
}} 


export default ShortIntro;
