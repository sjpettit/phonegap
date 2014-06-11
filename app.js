      
      var unirest = require('unirest');
      var data;
      var Request = unirest.get('http://frozen-thicket-7415.herokuapp.com/resources').end(function (response) {
      	data = response.body;
  		console.log(data);
      	var express = require('express');
		var http = require('http');
		var path = require('path');

		var users = {};
		var app = express();
		//server on http
		var server = require('http').createServer(app);
		var io = require('socket.io').listen(server,{log: false });

		//listening on port 5000
		server.listen(process.env.PORT || 5000);
		
		
		var Client = require('node-rest-client').Client;
		//creates client object
		var client = new Client();
		app.use(express.static(path.join(__dirname, 'public')));
		app.get('/', function(req, res){
			res.data = data;
  			res.render('index.ejs');
		});




  		
	   });
	   
