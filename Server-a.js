const server= require('express');
const fs= require('fs');
 const hbs= require('hbs');
 const port=process.env.PORT||3000;
 var application= server();
hbs.registerPartials(__dirname +'/views/partials')
// console.log(__dirname);
 application.set('view engine','hbs');
 application.use(server.static(__dirname+'/avanish'));
 application.use((req,res,next) =>{
   var now = new Date().toString();

   var log=`${now}: ${req.method} ${req.url}`;
   console.log(log);
   fs.appendFile('server.log',log + '\n',(err) =>{
   	if(err){
   	console.log('Unable to log server');
   }
   });
   fs.appendFile('server.log', log + '\n');
   next();
 } );
 application.get('/', function(req,res){

  res.send({
name:'Avanish',
  likes:[
    'biking',
    'travelling'
  ]
  });
  });

 application.get('/about',function(req,res){
	res.render('about.hbs',{
		pageTitle:'About Page',
		currentYear:new Date().getFullYear()
	});
});


 application.get('/bad',function(req,res){
 	res.send(
 	{
 		errorMessage:"unable to request page"
 	});
 });
 var server1 = application.listen(port,function(){
	console.log(`Server is up on port ${port}`);
});