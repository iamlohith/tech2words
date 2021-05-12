import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';



function Website(){
    return(
        <>
        <Navbar/>
<br/>
<br/>
<br/>
<article class="article1">
    
    <h2> How does a website work?</h2>
    <p>
    hello, guys today's topic is about how does a website work. In today's world, everyone is using the internet for watching youtube videos, 
    searching on google for unknown information or other queries. But when we are using google for knowing the unknown information, 
     we get a bunch of websites showing related information, yeah right!.</p>
     <p>
    But have you wondered how does this all process, from searching of information to getting the result in the search engine works.
    So the entire process will be explained in an easy manner, just stay tuned.</p>
    
    <br/>
    <br/>


    <h3>Process 1:</h3>
    <p>
                We use a web browser for surfing the internet and there are a lot more web browsers available on the internet like Chrome, Mozilla, etc.
             So let's chose the chrome browser for searching the information or unknown information.
              when we type information in the search bar of the browser it will display a lot of websites. 
    </p> 
             <br/>
             <br/>
    <img src="../images/web.jpg" alt="web" width="600" height="400"/>
             <br/>
             <br/>
    <h3>Process 2:</h3>
    <p>
                Let's take an example of typing facebook.com in the search bar, now the browser sent data or request to the DNS server, wait what is DNS server you might be wondering, DNS server is nothing like phone book directory which contains domain name(facebook.com) mapped to its IP address(213.23.44.55). An IP address is a unique address given to a server or device to identify itself on the internet just like your home address.
             
    </p>
       <br/>
             <br/>
    <img src="../images/p2.png" alt="p2"/>
             <br/>
             <br/>
    <h3>Process 3:</h3>
    <p>
                Now DNS server search for the IP address of the requested domain name (i.e facebook.com) and it sent the IP address to the browser if present or else it sent a request to other DNS server for the IP address. Now the browser directly reaches facebook.com using an IP address of which it has received.
    </p>
            <br/>
             <br/>
    <img src="../images/p3.png" alt="p3"/>
             <br/>
             <br/>
    <h3>Process 4:</h3>
            <p>    Once the facebook server receives a request from the browser. now the facebook server sends the login page to the browser in the form of an HTML file, which browser understands and displays in the browser.
            </p>    
            <br/>
             <br/>
    <img src="../images/p4.png" alt="p4"/>
             <br/>
             <br/>
    <p>I hope, I have tried to explain things in easy manner. if you have any suggestions or query please do comment. 
    </p>
    </article>

<br/>
<br/>
   <Footer/>     
        </>
    );
    
}

export default Website;