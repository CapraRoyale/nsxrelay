var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO

var relayID = 2; // This is the array that contains all GPIO pins used for the relays

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
    endRelay();
}

function testOnce() {
    var relayNum = new Gpio(relayID, 'high');
    blinkOnce(relayNum);
};

testOnce();
