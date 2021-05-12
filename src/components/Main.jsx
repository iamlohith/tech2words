import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import {NavLink } from 'react-router-dom';

const cssstyle={
    textAlign:'center'
};
function Main(){
    return(
        <>
        <Navbar/>
<br/>
<br/>
<br/>
<h2 style={cssstyle}>Latest news</h2>
<br/>

<div className="row row-cols-1 row-cols-md-3 g-4 ">
    <div className="col">
        <div className="card h-100 text-dark bg-light  border-primary  mb-3 shadow p-3 mb-5 bg-body rounded">
            <img src="./images/ram.jpg" className="card-img-top" alt="ramimage" />
            <div className="card-body">
                <p className="card-text">what is RAM and How does it works?</p>
                <NavLink to="/pages/ram" className="btn btn-primary">read more</NavLink>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100 text-dark bg-light  border-primary  mb-3 shadow p-3 mb-5 bg-body rounded">
            <img src="./images/web.jpg" alt="websiteimage" className="card-img-top"  />
            <div className="card-body">
                <p className="card-text">How does Website works?</p>
                <NavLink to="/pages/website" className="btn btn-primary">read more</NavLink>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
    <div className="col">
        <div className="card h-100 text-dark bg-light  border-primary  mb-3 shadow p-3 mb-5 bg-body rounded">
            <img src="./images/hdd.jpg" className="card-img-top" alt="harddiskimage"/>
            <div className="card-body">
                <p className="card-text">What is SSD?difference b/w SSD and HDD?</p>
                <NavLink to="/pages/hdd_vs_sdd" className="btn btn-primary">read more</NavLink>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    </div>
	
</div>
<br/>
<br/>
   <Footer/>     
        </>
    );
    
}

export default Main;