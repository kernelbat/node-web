const express = require('express');
var app = express();
app.get('/',function(req,res){
	console.log("Get a request from user");
	res.send('Hello Home');
});
app.get('/users',function(req,res){
	console.log("Get a request for users page");
	res.send('Users page');

});
app.get('/*list',function(req,res){
console.log("Got a GET request for list ");
res.send('Page Listing');

});
var server = app.listen(3000,function(){
	console.log("Server started");
});