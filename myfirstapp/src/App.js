import logo from './logo.svg';
import './App.css';
import wood from './images/wood.png';
import house from './images/cabin.png';

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
            <h2>0</h2>
          </div>


          <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', marginLeft: 25 }}>
            <img src={house} width={80} height={80}></img>
            <h2>0</h2>
          </div>

        </div>

      </div>

      <button className='axebutton'></button>

    </div>
  );
}

export default App;
