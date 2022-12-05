import React from 'react';
import './loader.scss'

import img1 from "../img/favicon.png";

const Loader = () => {

    return (<>
<div className="circle">
  <img src={img1} alt="logo" />
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" >  
    <circle cx="50" cy="50" r="40" />
  </svg>
</div>

    </>);
}

export default Loader;
