import React from 'react';
import { NavLink } from 'react-router-dom';


const name="© 2021 Copyright:";
const cssstyle={
    backgroundColor :'rgba(0, 0, 0, 0.2)'
}
function Footer(){
    return(
<footer className="bg-light text-center text-lg-start">
    
    <div className="text-center p-3" style={cssstyle}>
        {name}
        <NavLink className="text-dark" to="https://iamlohith.github.io/website">iamlohith.github.io</NavLink>
    </div>
    
</footer>

    );
}

export default Footer;