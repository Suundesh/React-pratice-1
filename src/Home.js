import React from 'react';
import './App.css';
import CoffeeName from './CoffeeName';
import CoffeeHome from './images/image1.png';


function Home(){
    return(
        <div className="home">
            <div className="left"><a href="https://en.wikipedia.org/wiki/Coffee" target="_blank"><img src={CoffeeHome} alt="Coffee" className="homeImg" ></img></a></div>
            <div className="right"><h1 className="headingText">Home</h1>
            <p className="para">
            Coffee is a plant (Coffea) and the name of the drink that is made from this plant. The coffee plant is a bush or tree that can grow up to ten meters (about 32 feet) high, but is usually cut shorter. Coffee plants originally grew in Africa, and now also grow in South America, Central America and Southeast Asia. They are an important crop for the economies of many countries.

            </p>
            <h2 className="para1">Types of coffee:</h2>
            <p className="para2">
                <CoffeeName name="Black coffee" id='Black coffee is coffee with no milk in it.'/>
              <CoffeeName name="White coffee" id='White coffee is coffee with milk in it.'/>
                <CoffeeName name="Café au lait" id='Café au lait is coffee made with a lot of hot milk. It is often sweet.'/>
                <CoffeeName name="Espresso" id='Espresso is very strong coffee. In Australia, it is often called a "short black".'/>
            </p>            
            </div>
        </div>
    )
}

export default Home;