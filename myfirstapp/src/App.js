import './App.css';
import wood from './images/wood.png';
import house from './images/cabin.png';
import axe from "./images/axe.png";
import axeIron from "./images/ironaxe.png";
import axeGold from "./images/goldaxe.png";
import axeDimond from "./images/silveraxe.png";
import React, { useState } from 'react';

let woods = 0;
let houses = 0;
let toolsUpgrade = "upgrade";
let axeImg = axe;
let showButton = false;





// function tools() {

//   if (houses >= 5) {
//     showButton = true;
//     toolsUpgrade = "upgrade to iron axe x2 faster";

//   } else if (houses >= 20) {
//     showButton = true;
//     toolsUpgrade = "upgrade to golden axe x5 faster";

//   } else if (houses >= 50) {
//     showButton = true;
//     toolsUpgrade = "upgrade to dimond axe x12 faster";

//   } else {
//     return;
//   }

//   showButton = !showButton;
// }



function App() {

  const [woodcounter, setwood] = useState(woods);
  const [housecounter, setHouses] = useState(houses);
  const [upgradeTool, setTool] = useState(toolsUpgrade);

  const increasing = () => {

    if (upgradeTool === "upgrade to iron axe x2 faster") {
      setwood(woods => woods + 3);
    } else if (upgradeTool === "upgrade to golden axe x5 faster") {
      setwood(woods => woods + 7);
    }
    setwood(woods => woods + 1);
    console.log(woods);

    if (woodcounter % 5 === 0 && woodcounter > 4) {
      setHouses(houses => houses + 1);
      console.log(houses);
    } else {
      return;
    }

    if (housecounter > 1 && housecounter < 6) {
      setTool("upgrade to iron axe x2 faster");
      // axeImg = axeIron;
      showButton = true;

    } else if (housecounter > 5 && housecounter < 10) {
      showButton = true;
      setTool(toolsUpgrade => toolsUpgrade = "upgrade to golden axe x5 faster");
      axeImg = axeGold;

    } else if (housecounter > 9) {
      showButton = true;
      setTool(toolsUpgrade => toolsUpgrade = "upgrade to dimond axe x12 faster");
      axeImg = axeDimond;


    } else {
      return;
    }


    // if (woods % 5 === 0) {
    //   setHouses(housecounter => houses + 1);
    //   console.log(houses);
    // }
  };

  // for (let i = 5; i >= 5;) {
  //   if (woods % 5) {
  //     houses++;
  //   } else {
  //     return;
  //   }
  // }

  const tools = () => {

    if (upgradeTool === "upgrade to iron axe x2 faster") {
      axeImg = axeIron;
    } else if (upgradeTool === "upgrade to golden axe x5 faster") {
      axeImg = axeGold;
    } else if (upgradeTool === "upgrade to dimond axe x12 faster") {
      axeImg = axeDimond;
    }

    // if (housecounter > 4) {
    //   setTool(toolsUpgrade => toolsUpgrade = "upgrade to iron axe x2 faster");
    //   showButton = true;

    // } else if (housecounter >= 20) {
    //   showButton = true;
    //   setTool(toolsUpgrade => toolsUpgrade = "upgrade to golden axe x5 faster");

    // } else if (housecounter >= 50) {
    //   showButton = true;
    //   setTool(toolsUpgrade => toolsUpgrade = "upgrade to dimond axe x12 faster");

    // } else {
    //   return;
    // }

    showButton = !showButton;

    console.log(showButton);
  }



  return (
    <div className="App">


      {// TOP DIV
      }
      <div style={{ display: 'flex', flexDirection: 'row', padding: 30, justifyContent: 'space-between', alignContent: 'center' }}>
        <h1>Castle Clicker</h1>

        {// RESOURCES & HOUSES
        }
        <div style={{ display: 'flex', flexDirection: 'row' }}>

          <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <img src={wood} width={100} height={100}></img>
            <h2>{woodcounter}</h2>
          </div>


          <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginLeft: 25 }}>
            <img src={house} width={80} height={80}></img>
            <h2>{housecounter}</h2>
          </div>

        </div>

      </div>

      <button style={{ backgroundImage: `url(${axeImg})` }} className='axebutton' onClick={increasing}
      ></button>

      <button className='upgradebutton' onClick={tools}>{upgradeTool}</button>

    </div>
  );
}

export default App;
