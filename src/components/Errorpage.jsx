import React from 'react';

import Footer from './Footer';
import Navbar from './Navbar';

const stylecss={
    textAlign:"center",
    color:"red"
}
function About(){
    return(
        <>
        <Navbar/>
        <h1 style={stylecss}>Oops page not found</h1>
		<Footer/>
</>

    );
}

export default About;