try{
	var env = require('./config/env_dev');
}
catch(err){
	var env = require('./config/env_prod');
}

var models = require("./models");
var express  = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname + './../app'));

var entry_routes = require('./routes/entry_routes');

app.use('/api/entries', entry_routes);

models.sequelize.sync().then(function(){
	app.listen(env.port,function(){
		console.log('Listenting on '+env.host+':'+env.port);
		console.log('Stop server with CTRL + C');
	});
})