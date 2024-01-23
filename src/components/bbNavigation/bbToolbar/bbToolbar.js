import React, { Component } from "react";

import classes from './bbToolbar.module.css';
import Logo from '../../../assets/logo.svg';


import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline,
    MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBContainer
    } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';
    
    
class toolbar extends Component {
    state = {
      isOpen: false
    };
    
    toggleCollapse = () => {
      this.setState({ isOpen: !this.state.isOpen });
    }
    
    render() {
      return (
        <Router>
            <MDBContainer className="sticky-top">
          <MDBNavbar className="sunny-morning-gradient color-block-5 mx-auto z-depth-1 " light expand="md">
            <MDBNavbarBrand className=''>

              <img src={Logo}  height="40" alt="logo"  />

            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav right>
                <MDBNavItem active>
                  <MDBNavLink to="#!">
                  <i class="fas fa-home"/>Home</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!"><i class="fab fa-forumbee"/>Features</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!"><i class="fas fa-dollar-sign"/>Pricing</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!"><i class="fas fa-chalkboard-teacher"/>Demo Request</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!"><i class="fas fa-sign-in-alt"/>Login</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!"><i class="fas fa-user-plus"/>Get Started</MDBNavLink>
                </MDBNavItem>

                {/* <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">Dropdown</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                      <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem> */}


              </MDBNavbarNav>
              
            </MDBCollapse>
          </MDBNavbar>
          </MDBContainer>
        </Router>
        );
      }
    }
    


export default toolbar;
