import './App.css';
import wood from './images/wood.png';
import house from './images/cabin.png';
import axe from "./images/axe.png";
import axeIron from "./images/ironaxe.png";
import axeGold from "./images/goldaxe.png";
import axeDimond from "./images/silveraxe.png";
import axeTitanium from "./images/titaniumaxe.png"
import helperImage from './images/lumberjack.png';
import React, { useState } from 'react';


// Very Basic Game
// Apologies for the poor organization, the project was implemented quickly with just a few hours due to midterms :)

let woods = 0;
let houses = 0;
let toolsUpgrade = "upgrade";
let axeImg = axe;
let showButton = false;
let help = "friend";
let helpButton = false;
let workinng = false;



function App() {

  const [woodcounter, setwood] = useState(woods);
  const [housecounter, setHouses] = useState(houses);
  const [upgradeTool, setTool] = useState(toolsUpgrade);
  const [imgUpdate, setImg] = useState(axeImg);
  //const [helper, setHelper] = useState(help);

  const increasing = () => {

    if (axeImg === axeIron) {
      setwood(woods => woods + 5);
    } else if (axeImg === axeGold) {
      setwood(woods => woods + 10);
    } else if (axeImg === axeDimond) {
      setwood(woods => woods + 15);;
    } else if (axeImg === axeTitanium) {
      setwood(woods => woods * 5);;
    } else {

      setwood(woods => woods + 1);
    }
    console.log(woods);


    if (woodcounter % 5 === 0 && woodcounter > 4) {
      setHouses(houses => houses + 1);
      console.log(houses);
    } else {
      return;
    }

    if (housecounter > 1 && housecounter < 3 && axeImg != axeIron) {
      setTool("upgrade to iron axe x2 faster! cost = 5 woods");
      // axeImg = axeIron;
      showButton = true;

    } else if (housecounter > 5 && housecounter < 7 && axeImg != axeGold) {
      showButton = true;
      setTool(toolsUpgrade => toolsUpgrade = "upgrade to golden axe x5 faster! cost = 20 woods");
      //axeImg = axeGold;

    } else if (housecounter > 9 && housecounter < 11 && axeImg != axeDimond) {
      showButton = true;
      setTool(toolsUpgrade => toolsUpgrade = "upgrade to dimond axe x12 faster! cost = 3 houses");
      //axeImg = axeDimond;


    } else if (housecounter > 15 && axeImg != axeTitanium) {
      showButton = true;
      setTool(toolsUpgrade => toolsUpgrade = "upgrade to Titanium axe x50 faster!! cost = 100 woods & 5 houses");
      //axeImg = axeDimond;


    } else if (housecounter > 10 && workinng == false) {
      helpButton = true;
      help = "get a friend helps you mine x2 faster! cost = 50 woods"
    } else {
      return;
    }

  };


  const updatTools = () => {

    if (upgradeTool === "upgrade to iron axe x2 faster! cost = 5 woods") {
      axeImg = axeIron;
      setImg(axeImg);
      setwood(woodcounter => woodcounter -= 5);
    } else if (upgradeTool === "upgrade to golden axe x5 faster! cost = 20 woods") {
      axeImg = axeGold;
      setImg(axeImg);
      setwood(woodcounter => woodcounter -= 20);
    } else if (upgradeTool === "upgrade to dimond axe x12 faster! cost = 3 houses") {
      axeImg = axeDimond;
      setImg(axeImg);
      setHouses(housecounter => housecounter -= 3);
    } else if (upgradeTool === "upgrade to Titanium axe x50 faster!! cost = 100 woods & 5 houses") {
      axeImg = axeTitanium;
      setImg(axeImg);
      setwood(woodcounter => woodcounter -= 100);
      setHouses(housecounter => housecounter -= 5);
    }


    showButton = !showButton;

    console.log(showButton);
  }


  function Show() {
    if (showButton) {
      return (
        <div style={{ marginTop: 10 }}>

          <button className='upgradebutton' onClick={updatTools}>{upgradeTool}</button>
        </div>
      );
    } else {
      return;
    }
  }

  const getHelp = () => {
    setInterval(() => {
      setwood(woodcounter => woodcounter += 5);
      workinng = true;
    }, 1000);

    setwood(woodcounter => woodcounter -= 50);

    helpButton = false;
  }

  function DisplayHelperImage() {
    if (helpButton == false && workinng == true) {
      return (
        <img className='helperimage' height={90} width={90} src={helperImage} ></img>
      )
    } else {
      return;
    }
  }

  function ShowHelp() {
    if (helpButton) {
      return (
        <div style={{ marginTop: 10 }}>

          <button className='helperbutton' onClick={getHelp}>{help}</button>
        </div>
      );
    } else {
      return;
    }
  }


  return (
    <div className="App">


      {// TOP DIV
      }
      <div style={{ display: 'flex', flexDirection: 'row', padding: 30, justifyContent: 'space-between', alignContent: 'center' }}>
        <h1>Village Clicker</h1>

        {// RESOURCES & HOUSES
        }
        <div style={{ display: 'flex', flexDirection: 'row' }}>

          <DisplayHelperImage />

          <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center' }}>
            <img src={wood} width={100} height={100}></img>
            <h2>{woodcounter}</h2>
          </div>


          <div className='pointsdiv' style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginLeft: 25 }}>
            <img src={house} width={80} height={80}></img>
            <h2>{housecounter}</h2>
          </div>

        </div>

      </div>


      <button style={{ backgroundImage: `url(${axeImg})` }} className='axebutton' onClick={increasing}
      ></button>

      <Show />
      <ShowHelp />

      {/* <button className='upgradebutton' onClick={tools}>{upgradeTool}</button> */}

    </div>
  );
}

export default App;
