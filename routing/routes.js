var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../relayTest/public/index.html"));
    });

    app.get("/:relayNum", function (req, res) {
        var relayNumber = req.params.relayNum
        // Express res.sendFile sends the provided .html file back to the client
        // With res.sendFile, you need to use the absolute path of the directory that the executing script is in (development or production directory). That said, path.join() uses __dirname for the absolute path of the directory and joins it at the relative path of the .html file
        console.log("User Requesting relay number " + relayNumber)
        var relayHTTPreq = new Gpio(relayNumber, 'high');
        blinkSequence(relayHTTPreq);
        // res.send(relayNumber);
    });

}