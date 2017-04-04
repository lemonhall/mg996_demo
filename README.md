# Ruff Application

## Init Project

- 1、mkdir mg996r_demo

- 2、cd mg996r_demo

- 3、rap init

- 4、rap device add mg996

- 5、rap layout --visual

- 6、rap install home

## Coding

- 7、add code

```js
	var Server = require('home').Server;

	var server = new Server();

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
```

## Deploy

- 8、rap deploy -s

- 9、rap log

## Test

- 10、lanuch Postman in chrome

call:http://192.168.78.1:8081/setAngle?angle=160

to set angle to 160

## Done
11、Done