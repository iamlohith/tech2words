import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

const stylecss={
    textAlign:"center"
}
function About(){
    return(
        <>
        <Navbar/>
<h1 style={stylecss}>About us</h1>
		<div className="container">
			<p style={stylecss} >This website aims to provide latest and useful technology related information.</p>
			
		</div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        
        <Footer/>
</>

    );
}

export default About;