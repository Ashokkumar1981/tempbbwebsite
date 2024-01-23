import React from 'react';
import Aux from "../../hoc/Aux";
import classes from './bbLayout.module.css';
import Logo from '../../assets/logo.svg';
import HeaderSection from '../bbHeader/bbHeaderSection';
import Toolbar from '../bbNavigation/bbToolbar/bbToolbar';

import MainContent from '../bbMainContent/bbMainContent';
import FooterSection from '../bbFooter/bbFooterSection';
import {
    MDBMask,MDBView
    } from "mdbreact";
    import { BrowserRouter as Router } from 'react-router-dom';


const layout = (props) => (
    <Aux>
        <div className='sunny-morning-gradient'>         
        <HeaderSection />    
        <MainContent/>
        <FooterSection />
        </div>

    </Aux>

);

export default layout;

