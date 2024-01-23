import React from 'react';

import classes from './bbMainContent.module.css';
import Introduction from './bbIntroduction';
import Aux from "../../hoc/Aux";

const maincontentsection = (props)=>(

      <Aux>
          
        <Introduction/>
        <Introduction/>
        {/* <Bumblebees_Screen/>
        <Bumblebees_Advantages/>
        <Bumblebees_Clients/>
        <Bumblebees_keyfeatures/> */}
        
      </Aux>

);

export default maincontentsection;