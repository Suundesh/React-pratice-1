import React from 'react';
import './App.css';
import CoffeeAbout from './images/about.png';

function About(){
    return(
        <div className="about">
            <div className="rightA"><a href="https://en.wikipedia.org/wiki/Coffee" target="_blank"><img src={CoffeeAbout} alt="Minion" className="homeImg"></img></a></div>
            <div className="leftA" >< h2 className="headingText">About</h2>
            < p className="para">
            To make a drink from coffee beans, the beans must first be specially prepared by drying the beans and then roasting. The beans are dried a short time after they are picked. This preserves them and makes them ready to be packed or roasted. Before the beans are made into a drink, they must be roasted or ground (crushed into tiny pieces in a coffee mill). When the ground coffee is placed into boiling water, the flavour and dark brown colour of the beans goes into the water. Making coffee is called brewing coffee. There are several different ways that coffee can be brewed.
            </p>
            <br></br>
            <p className="para">
            Coffee contains a number of useful nutrients, including riboflavin, niacin, magnesium, potassium, and various phenolic compounds, or antioxidants.
            </p>

            <p className="para">Click Here For More Details!! <a className="more"
            href="https://en.wikipedia.org/wiki/Coffee" target="_blank">More Coffee... :) </a></p>
            </div>
        </div>
    )
}


export default About;

