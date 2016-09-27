
// BASE SETUP

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tesdb', function(err, db) {
	if (err) {
		return console.dir(err);
	} else {
		console.log("connection successfully established!");
	}
});

// configuring app to use bodyParser()
// This will help to get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Define the port
var port = process.env.PORT || 8080;

var router = express.Router();

router.use(function(request, response, next) {
	console.log("Something is happening!");
	next();
});

router.route("/bears")
	.post(function(request, response) {
		var bear = new Bear();
		bear.name = request.body.name;

		

		bear.save(function(err) {
			if (err) 
				response.send(err);
			response.json({ message: 'Bear created' });
			console.log('Bear created : ' + bear.name);
		});
	})
	.get(function(request, response) {
		Bear.find(function(err, bears) {
			if (err)
				response.send(err);
			response.json(bears);
			console.log('Getting Bears : ' + bears);
		});
	});

router.route("/bears/:bear_id")
	.get(function(request, response) {
		Bear.findById(request.params.bear_id, function(err, bear) {
			if (err) 
				response.send(err);
			response.json(bear);
			console.log('Bear found by id ' + request.params.bear_id + ' : ' + bear);
		});
	})
	.put(function(request, response) {
		Bear.findById(request.params.bear_id, function(err, bear) {
			if (err)
				response.send(err);
			bear.name = request.body.name;

			bear.save(function(err) {
				if (err)
					response.send(err);
				response.json({ message: 'Bear updated!' });
				console.log('Bear updated by id ' + request.params.bear_id + ' : ' + bear);
			});
		});
	})
	.delete(function(request, response) {
		Bear.remove({
			_id: request.params.bear_id
		}, function(err, bear) {
			if (err)
				response.send(err);
			response.json({ message: 'Bear deleted!'});
		});
	});


// fire a GET to our page
router.get('/', function(request, response) {
	response.json({ message: 'YAY! Welcome to the API!' });
});

// app routes will be prefixed with /api
app.use('/api', router);

// application listening on the port
app.listen(port);
console.log("Server started on " + port);



var Bear = require('./app/models/bear');




