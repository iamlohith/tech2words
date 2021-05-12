import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';



function Ram(){
    return(
        <>
        <Navbar/>
<br/>
<br/>
<br/>
<section className="posts">
		<article className="article1">
		<header><h2 className="text-start">What is RAM and How does it works?</h2></header>	
		<p className="text-start"> 
			RAM abbreviation is Random Access Memory

			Ram is a memory stoarge device in which is volatile in nature and it is used by processor
			in mobile,computer,laptop for processing the data.
						</p> 
	
	
			
			
		
			<figure className="figure">
				<img src="../images/ram.jpg" className="figure-img img-fluid rounded lazy loading" alt="ram" width="600" height="400"/>
				<figcaption className="figure-caption">picture is shown above</figcaption>
			  </figure>
			<br/>
			<p  className="text-start">
			So lets break things into simple words.
			<br/>
		
			Memory storage is hardware device or component which stores data of any form.
			Memory storage is laptop or computer is of three kinds namely.<br/>
			1) RAM or primary storage<br/>
			2) Hard disk or secondary storage<br/>
			3) Cache memory
			<br/>
			</p>
			pic of secondary storage is shown below
			<br/>
			<img src="../images/hdd.jpg" alt="harddisk" className="lazy loading"/>
			<br/>
			<p className="text-start">
			Now comes the volatile nature of RAM because it requires continues power supply to store data.If the power
			supply is gone then the data present in the RAM is also gone.
			</p>
			<p className="text-start">
			Now comes the processor part
			Processor is the main component in mobileor computer or laptop to operate dseired task or work.
			Processor is like machine which accepts input and gives output in fraction of seconds,which is expressed as
			processor speed.
			Example for processor speed is 2.4GHz(2.4 Giga Hertz) i.e the processor can process the 2.4*10^9 cycle of
			instruction per second.
			</p>
			<p className="text-start">
			So lets bind up all the information that we have discussed to understand RAM
			Processor works at very high speed,so to supply data to processor at that speed we make use of RAM.<br/>
			So RAM store data from the secondary memory where data are stored permanently and feeds that data to
			processor.
			</p>
			<p className="text-start">So lets see with an example of how RAM works?</p>
			<p className="text-start">When we run an application in laptop or mobile ,the processor finds location of that application data is
			present in secondary storage, then it stores the required information or data into RAM for executes of that
			application.once the application task is completed then the processor stores the some data in cache of
			memory in processor if that data is required for future work.
			</p>
			<img src="../images/working.png" width="500" height="500" alt="working" className="lazy loading"/>
			<br/>
			
	</article>
</section>

<br/>
<br/>
   <Footer/>     
        </>
    );
    
}

export default Ram;