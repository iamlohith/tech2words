import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import {NavLink } from 'react-router-dom';
const stylecss={
    maxWidth:'540px'
	
}
const color={
	backgroundColor:"#798EA4",
	color:"white",
	fontSize:"20px"
}

function Topics(){
    return(
<>
<Navbar/>
<br/>
<br/>
<br/>
<h1 > Topics </h1>
<br/>
<br/>
<div className="accordion   mb-3 shadow  mb-4 bg-body rounded" id="accordionExample">
	<div className="accordion-item ">
	  <h2 className="accordion-header" id="headingOne">
		<button className="accordion-button collapsed" style={color} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
		  <label>Internet     <span className="btn btn-primary badge badge-pill">3</span></label>
		  
		</button>
	
	  </h2>
	  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
		<div className="accordion-body">
			<div className="card mb-3" style={stylecss} >
				<div className="row g-0">
				  <div className="col-md-4">
					<img src="./images/web.jpg" alt="website" />
				  </div>
				  <div className="col-md-8 ">
					<div className="card-body">
					    <p className="card-text">How does Website works?</p>
               			 <NavLink to="/pages/website" className="btn btn-primary">read more</NavLink>
					</div>
				  </div>
				</div>
			  </div>
			  <br/>
			  <br/>
			  <div className="card mb-3" style={stylecss}>
				<div className="row g-0">
				  <div className="col-md-4">
					<img src="./images/hdd.jpg" alt="harddisk"/>
				  </div>
				  <div className="col-md-8">
					<div className="card-body">
					    <p className="card-text">What is SSD?difference b/w SSD and HDD?</p>
                <NavLink to="/pages/hdd_vs_sdd" className="btn btn-primary">read more</NavLink>
					</div>
				  </div>
				</div>
			  </div>
			  <br/>
			  <br/>
			  <div className="card mb-3 " style={stylecss} >
				<div className="row g-0">
				  <div className="col-md-4">
					<img src="./images/ram.jpg" alt="ram"/>
				  </div>
				  <div className="col-md-8">
					<div className="card-body">
					    <p className="card-text">what is RAM and How does it works?</p>
                <NavLink to="/pages/ram" className="btn btn-primary">read more</NavLink>
					</div>
				  </div>
				</div>
			  </div>
		</div>
	  </div>
	</div>
	<div className="accordion-item">
	  <h2 className="accordion-header" id="headingTwo">
		<button className="accordion-button collapsed"  style={color} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
			<label>Mobile     <span className="btn btn-primary badge badge-pill">0</span></label>
		</button>
	  </h2>
	  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
		<div className="accordion-body">
		  <strong>coming soon ....</strong>
		</div>
	  </div>
	</div>
	<div className="accordion-item">
	  <h2 className="accordion-header" id="headingThree">
		<button className="accordion-button collapsed" style={color} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			<label>laptop     <span className="btn btn-primary badge badge-pill">0</span></label>
		</button>
	  </h2>
	  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
		<div className="accordion-body">
		  <strong>coming soon ....</strong>
		</div>
	  </div>
	</div>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <br/>
  <Footer/>
    </>
    );
}

export default Topics;