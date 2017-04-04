'use strict';

var Server = require('home').Server;

var server = new Server();

$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    $('#led-r').turnOn();
    
    $('#mg996').setAngle(0);
    
    server.get('/setAngle', function (req) {

    	console.log(req.query);
    	var angle = parseInt(req.query.angle);
    	//$('#sg90').setAngle(0);
		$('#mg996').setAngle(angle);

	    return {
	        sn: process.ruff.sn,
	        time: Date.now()
	    };
	});

	server.listen(8081);
});

$.end(function () {
    $('#led-r').turnOff();
});
