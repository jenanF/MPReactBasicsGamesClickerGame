import logo from './logo.svg';
import './App.css';
import wood from './images/wood.png';
import house from './images/cabin.png';
import React, { useState } from 'react';

let woods = 0;
let houses = 0;
let toolsUpgrade = "upgrade";
let showButton = false;

function Increasing() {

  useState(); {
    woods++;
    console.log(woods);

    for (let i = 5; i >= 5;) {
      if (woods % 5) {
        houses++;
      } else {
        return;
      }
    }
  }
}

function tools() {

  if (houses >= 5) {
    showButton = true;
    toolsUpgrade = "upgrade to iron axe x2 faster";

  } else if (houses >= 20) {
    showButton = true;
    toolsUpgrade = "upgrade to golden axe x5 faster";

  } else if (houses >= 50) {
    showButton = true;
    toolsUpgrade = "upgrade to dimond axe x12 faster";

  } else {
    return;
  }

  showButton = !showButton;
}



function App() {
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
            <h2>{woods}</h2>
          </div>


          <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginLeft: 25 }}>
            <img src={house} width={80} height={80}></img>
            <h2>{houses}</h2>
          </div>

        </div>

      </div>

      <button className='axebutton' //onClick={Increasing()}
      ></button>

      <button className='upgradebutton' title={toolsUpgrade}>{toolsUpgrade}</button>

    </div>
  );
}

export default App;
