import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBView, MDBContainer } from "mdbreact";
import { HashLink as Linknew } from 'react-router-hash-link';

class Header extends Component {
 

state = {
  collapsed: false
};

handleTogglerClick = () => {
  this.setState({ collapsed: !this.state.collapsed });
};

render() {
  const overlay = (
    <div id="sidenav-overlay1" style={{ backgroundColor: "transparent" }} onClick={this.handleTogglerClick} />
  );
  
  return (
  <div id="apppage">
    <Router>
      <div>
        <MDBNavbar color="default-color" dark expand="md" fixed="top" scrolling transparent>
          <MDBContainer>

            <MDBNavbarToggler onClick={this.handleTogglerClick} />
            <MDBCollapse isOpen={this.state.collapsed} navbar>
              
              <MDBNavbarNav right>
                <MDBNavItem active={false}>
                  <div style={{padding: '.5em', fontSize: '1.2em'}} >
                    <Linknew smooth to="/#anchor-home" style={{color: 'white', paddingRight: '.6em', paddingLeft: '.6em'}} >Home</Linknew>
                  </div> 
                </MDBNavItem>
                <MDBNavItem active={true}>
                  <div style={{padding: '.5em', fontSize: '1.2em'}} >
                    <Linknew smooth scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="/#anchor-example" style={{color: 'white'}}>Examples</Linknew>
                  </div>                
                </MDBNavItem>
                <MDBNavItem>
                  <div style={{padding: '.5em', fontSize: '1.2em'}} >
                    <Linknew smooth scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'start' })} to="/#anchor-resume" style={{color: 'white'}}>Resume</Linknew>
                  </div> 
                </MDBNavItem>
              </MDBNavbarNav>
              
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
        {this.state.collapsed && overlay}
      </div>
    </Router>
    
    <MDBView>
      <MDBMask className="d-flex justify-content-center align-items-center gradient">
        <MDBContainer>
          <MDBRow>
            <div className="dark-text text-center text-md-right col-md-6 mt-xl-7 mb-7">
            </div>
            <div className="dark-text text-center text-md-right col-md-6 mt-xl-5 mb-5">
              <h1 className="h1-responsive font-weight-bold mt-sm-5">
                George Rukomin portfolio.{" "}
              </h1>
              <hr className="hr-light" />
              <h5 className="mb-3 " >
                Welcome to my portfolio site.
              </h5>            
            </div>
          </MDBRow>

          <MDBRow>  
            <MDBCol>
              <div className="dark-text text-center text-md-left col-md-3 mt-xl-6 mb-6">
                <h3 className="h3-responsive  text-right">
                  Web developing:
                </h3>
              </div>
              <div className="dark-text text-right col-md-3 mt-xl-6 mb-6  my-0 py-0">
                <h3 className="h3-responsive  mt-sm-1">
                  - ReactJS
                </h3>
              </div>
              <div className="dark-text text-right col-md-3 mt-xl-6 mb-6  my-0 py-0">
                <h3 className="h3-responsive  mt-sm-1">
                  -Angular
                </h3>
              </div>
              <div className="dark-text text-right col-md-3 mt-xl-6 mb-6  my-0 py-0">
                <h3 className="h3-responsive  mt-sm-1">
                  - PHP
                </h3>
              </div>
              <div className="dark-text text-right col-md-3 mt-xl-6 mb-6  my-0 py-0">
                <h3 className="h3-responsive  mt-sm-1">
                  - NodeJS
                </h3>
              </div>
              <div className="dark-text text-right col-md-3 mt-xl-6 mb-6  my-0 py-0">
                <h3 className="h3-responsive  mt-sm-1">
                  - Serverless
                </h3>
              </div>
            </MDBCol>          
          </MDBRow>

        </MDBContainer>
      </MDBMask>
    </MDBView>

    
  </div>
  );
  }
} 


export default Header;




