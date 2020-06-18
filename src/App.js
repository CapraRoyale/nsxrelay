// ALWAYS inport libraries and modules first
import React from 'react';
import logo from './logo.svg';
import './App.css';

var relayGPIO = [2, 3, 4, 14, 15, 18, 17, 27, 22, 23, 24, 10, 9, 11, 25, 8]; // This is the array that contains all GPIO pins used for the relays

// Create a function to read through array of GPIO pins and generate a buttons for each
function buttonGen(array) {
  // loop below iterates through array
  array.forEach(function(element){
    // for (let index = 0; index < array.length; index++) {
    // create a temporary element to contain current item in array
    // const element = array[index];
    // return HTML element with the
    return (
      <div className={element}>Relay {element} </div>
    );
    // };
  });
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" width="200px" />
        {buttonGen(relayGPIO)}
        {/* NOTE: ONLY RENDERS ONE ELEMENT WITH ALL ARRAY NUMBERS */}
      </header>
    </div>
  );
}

export default App;
