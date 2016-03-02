//
try{just had 
	var env = require('./config/env_dev');
}
catch(err){
	var env = require('./config/env_prod');
}

var express  = require('express');
var app = express();

app.use(express.static(__dirname + './../app'));

app.listen(env.port,function(){
	console.log('Listenting on '+env.host+':'+env.port);
	console.log('Stop server with CTRL + C');
})

