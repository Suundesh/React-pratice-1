import React from 'react';
import './App.css';
import Details from './Details';
import CoffeeContact from './images/contact.png';

function Contact(){
    return(
        <div className="contact">
            <div className="left"><a href="https://en.wikipedia.org/wiki/Coffee" target="_blank"><img src={CoffeeContact} alt="Coffee" className="homeImg"></img></a></div>
            <div className="right"><h1 className="headingText">Contact</h1>
            <p className="para3">
            <Details name="Suundesh" id='20181CCE0091' section="6CCE2"/>
            <h3>Email : <a className="email" href="mailto:201810102146@presidencyuniversity.in">Suundesh@presidencyuniversity</a></h3>
            <h3>School : School Of Engineering</h3>
            <h3>Course : Computer And Communication</h3>
            <h3>Subject : Front-End Web Development With React</h3>
            <h3>React App 1</h3>
            </p>
            </div>
           
        </div>
    )
}

export default Contact;