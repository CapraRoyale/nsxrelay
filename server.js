// We require/import the HTTP module
var http = require("http");

//import gpio library
var Gpio = require("onoff").Gpio;

var express = require("express");

// Sets up the Express App
// ================================================
var app = express();

var PORT = process.env.PORT || 8080;

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});

var blinkOnce = function (RelayObj) { // Create function to contain a timed switch to test each connected relay

  // var blinkInterval = setInterval(startRelay, 200); //run the blinkRelay function every x secs

  function startRelay() { //function to start blinking
    if (RelayObj.readSync() === 0) { //check the pin state, if the state is 0 (or off)
      RelayObj.writeSync(1); //set pin state to 1 (turn RelayObj on)
    } else {
      RelayObj.writeSync(0); //set pin state to 0 (turn RelayObj off)
    }
  }

  function endRelay() { //function to stop blinking
    // clearInterval(blinkInterval); // Stop blink intervals
    RelayObj.writeSync(0); // Turn RelayObj off
    RelayObj.unexport(); // Unexport GPIO to free resources
  }

  // setTimeout(endRelay, 5000); //stop blinking after 5 seconds

  startRelay();
  // endRelay();
}

// create list to contain all GPIO pins used for relays
var relayGPIO = [2, 3, 4, 14, 15, 18, 17, 27, 22, 23, 24, 10, 9, 11, 25, 8]; // This is the array that contains all GPIO pins used for the relays

for (let i = 0; i < relayGPIO.length; i++) {
  var j = relayGPIO[i];
  var relayNum = new Gpio(j, 'high');
  // 
}

app.get("/:relay", function (req, res) {
  rela
  res.send(req.params);
  console.log(req.params);
  blinkOnce(relayNum);
});