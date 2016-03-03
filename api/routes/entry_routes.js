var models = require('../models');
var express = require('express');
var router = express.Router();

//get entries
router.get('/',function(req,res){
	models.Entries.findAll().then(function(entries){
		res.json({
			entries:entries
		});
	});
});

//get enty

router.get('/:entryId',function(req,res){
	console.log('Getting Entry with ID:' +req.params.entryId);
	var where = {where:{id:req.params.entryId}};
	models.Entries.find(where).then(function(entry){
		res.json({
			entry:entry
		});
	});
});

//post new entry
router.post('/', function(req,res){
	var entry = req.body;
		entry.status = 'active';
	models.Entries.create(entry).then(function(entry){
		res.json({
			entry:entry
		});
	});
});

//delete
router.delete('/:entryId',function(req,res){
	var where = {where:{id:req.params.entryId}}
	models.Entries.find(where).then(function(entry){
		console.log(entry)
		entry.destroy();
		res.json({
			deleted:true
		});
	});
});


module.exports = router;