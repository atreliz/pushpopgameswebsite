

var express = require('express');
var app = express();

// simple logger
app.use(function(req, res, next){
  console.log('%s %s', req.method, req.url);
  next();
});

// respond



/* SERVER AND FILES CODE*/

var port = process.env.OPENSHIFT_NODEJS_PORT ? process.env.OPENSHIFT_NODEJS_PORT :8080;
var ip = process.env.OPENSHIFT_NODEJS_IP ? process.env.OPENSHIFT_NODEJS_IP: '';
app.listen(port, ip);

console.log("yes master");

app.use('/', express.static(__dirname + '/public'));



var likesFriends=20;
var likesFamily=30;

app.get('/likesFriends', function(req, res){
	console.log("likesFriends: "+likesFriends);
  res.send({"likes":likesFriends});
});

app.get('/addlikesFriends', function(req, res){
	likesFriends++;
  res.send({"likes":likesFriends});
});

app.get('/likesFamily', function(req, res){
  res.send({"likes":likesFamily});
});

app.get('/addlikesFamily', function(req, res){
	likesFamily++;
  res.send({"likes":likesFamily});
});



