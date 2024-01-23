import React, { Component } from "react";
import Logo from '../../assets/logo.svg';
import boris from '../../assets/boris.jpg';


import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, 
    MDBContainer, MDBRow,MDBCol, MDBJumbotron,MDBCardTitle,MDBBtn,MDBIcon,MDBMask,MDBView, MDBCard
    } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';
    


    class introduction extends Component {
        state = {
          isOpen: false
        };
        
        toggleCollapse = () => {
          this.setState({ isOpen: !this.state.isOpen });
        }
        
        render() {
          return (
            <Router>
                <MDBContainer>
    
                <MDBRow>
                    <MDBCol>
                    <MDBJumbotron style={{ padding: 0 }}>
                        
                        <MDBCard className="text-dark text-center my-1 img-fluid transparent" style={{ backgroundImage: `url(${boris})` }}>
                        {/* <MDBMask className="flex-center py-5 px-1" pattern={0} overlay="stylish-light" > */}
        
                        <MDBCol className="py-5" >
                            <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold" style={{'text-shadow': `2px 0px 5px #FFFF99`}}> Want to make your application perform better?</MDBCardTitle>
                            <p className="mx-5 mb-1" style={{'text-shadow': `2px 0px 5px #FFFF99`}}>Let us introduce our New Age Performance Testing tools</p>
                            <img src={Logo}  height="60" alt="logo" style={{'-webkit-filter': `drop-shadow( 3px 3px 2px rgba(0, 0, 0, .9))`,
                            filter: `drop-shadow( 3px 2px 2px rgba(255,204,0,.9))`}} />
                            <p className="mx-5 mb-5" style={{'text-shadow': `2px 2px 5px #FFFF99`}}>developed by bunch of Awesome Developers.</p> 
                            
                            <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Let's Get Started</MDBBtn>
                        </MDBCol>
                        {/* </MDBMask> */}
                        </MDBCard>
                    </MDBJumbotron>
                    </MDBCol>
                </MDBRow>
              </MDBContainer>


            </Router>
            );
          }
        }
        
    
    
    export default introduction;
       