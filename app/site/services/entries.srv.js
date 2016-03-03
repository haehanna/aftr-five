app.service('entrySrv',EntryService);

function EntryService($state, api){
	this.api = api;
	this.state = $state;
	this.entryDetails = {};
	this.entries = [];
}

EntryService.prototype.getEntries = function(){
	var _this = this;
	return this.api.request('/entries',{},'GET')
	.then(function(res){
		console.log(res);
		_this.entries = res.data.entries;
		return res.data.entries;
	},function(res){
		console.log(res);
		return;
	})
}

EntryService.prototype.getEntry = function(entryId){
	var _this = this;
	return this.api.request('/entries/'+entryId,{},'GET')
	.then(function(res){
		return res.data.entry;
	})
}

EntryService.prototype.addEntry = function(entry){
	var _this = this;
	this.api.request('/entries',entry,'POST')
	.then(function(res){
		console.log(res);
		if(res.status === 200){
			_this.entries.push(res.data.entry);
			_this.state.go('admin.page');
		}
	})
}

EntryService.prototype.deleteEntry = function(entryId, entry){
	var ctrl = this;
	console.log('deleting');
	return this.api.request('/entries/'+entryId,entry,'DEL')
	.then(function(res){
		console.log(res);
		if(res.status === 200){
			for(index in ctrl.entries){
				if(ctrl.entries[index].id == entryId){
					delete ctrl.entries[index];
				}
			}
		}	
	})
}