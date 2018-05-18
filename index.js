"use strict";

// config stuff
var config = require('./secrets');
var thermostats = require('./thermostats');
var sensors = require('./sensors');

// server stuff
var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);

var io = require('socket.io')(http);

http.listen(config.serverPort, function(){
  console.log('listening on *:' + config.serverPort);
});

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});