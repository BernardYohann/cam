var express = require('express'),
    app = express(),
    server = require('http').Server(app),
    io = require('socket.io')(server),
    five = require("johnny-five"),
    oldAng = 90;


server.listen(3000, "127.0.0.1");

board = new five.Board();
board.on("ready", function () {
    myServo = new five.Servo(9);
    board.repl.inject({
        servo: myServo
    });

    this.wait(5000, function () {
        myServo.stop();
        myServo.to(oldAng);
        myServo.stop();
    });

    io.on('connection', function (socket) {
        socket.on("changeAngle", function (ang) {
            deltAng = oldAng - ang;
            oldAng = ang;
            myServo.step(deltAng);
        });
    });
});