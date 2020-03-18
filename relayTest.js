var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var relayGPIO = [2, 3, 4, 14, 15, 18, 17, 27, 22, 23, 24, 10, 9, 11, 25, 8]; // This is the array that contains all GPIO pins used for the relays


var blinkSequence = function (RelayObj) { // Create function to contain a timed switch to test each connected relay

  var blinkInterval = setInterval(blinkRelay, 200); //run the blinkRelay function every x secs

  function blinkRelay() { //function to start blinking
    if (RelayObj.readSync() === 0) { //check the pin state, if the state is 0 (or off)
      RelayObj.writeSync(1); //set pin state to 1 (turn RelayObj on)
    } else {
      RelayObj.writeSync(0); //set pin state to 0 (turn RelayObj off)
    }
  }

  function endBlink() { //function to stop blinking
    clearInterval(blinkInterval); // Stop blink intervals
    RelayObj.writeSync(0); // Turn RelayObj off
    RelayObj.unexport(); // Unexport GPIO to free resources
  }

  setTimeout(endBlink, 5000); //stop blinking after 5 seconds
}

// function arrayAll() {
//   for (let i = 0; i < relayGPIO.length; i++) {
//     var j = relayGPIO[i];
//     var relayNum = new Gpio(j, 'high');
//     blinkSequence(relayNum);
//   }
// };

// arrayAll();

// var indexCount = 0; //a counter
// dir = "up"; //variable for flowing direction

// function flowingRelays() { //function for flowing Leds
//   relayGPIO.forEach(function (currentValue) { //for each item in array
//     currentValue.writeSync(0); //turn off relay
//   });
//   if (indexCount == 0) dir = "up"; //set flow direction to "up" if the count reaches zero
//   if (indexCount >= relayListLength) dir = "down"; //set flow direction to "down" if the count reaches 7
//   if (dir == "down") indexCount--; //count downwards if direction is down
//   leds[indexCount].writeSync(1); //turn on LED that where array index matches count
//   if (dir == "up") indexCount++ //count upwards if direction is up
// };

// process.on('SIGINT', unexportOnClose); //function to run when user closes using ctrl+cc