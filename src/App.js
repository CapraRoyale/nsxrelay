import React from 'react';
import logo from './logo.svg';
import './App.css';

var relayGPIO = [2, 3, 4, 14, 15, 18, 17, 27, 22, 23, 24, 10, 9, 11, 25, 8]; // This is the array that contains all GPIO pins used for the relays

function buttonGen(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    return (
      <div>
        <div key={element}>Relay {element} </div>
      </div>
    );
  };
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200px" />
        {buttonGen(relayGPIO)}
      </header>
    </div>
  );
}

export default App;
