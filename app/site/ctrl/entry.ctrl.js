app.controller('EntryCtrl',EntryCtrl);

function EntryCtrl(entrySrv, $state, $stateParams, api, entries, $filter){
	var ctrl = this;
	ctrl.entrySrv = entrySrv;
	ctrl.$state = $state;
	ctrl.$stateParams = $stateParams;
	ctrl.entries = entries;
	ctrl.$filter = $filter;

}

EntryCtrl.prototype.addEntry = function(){
	var ctrl = this;
	var entry = {
		title: ctrl.title,
		date: ctrl.date,
		category: ctrl.category,
		image: ctrl.image,
		content: ctrl.content,
	};

	ctrl.entrySrv.addEntry(entry);
}
EntryCtrl.prototype.toEntry = function(entry, entryId){
	var ctrl = this;
	ctrl.$state.go('admin.entry',{entryId:entryId});
}

app.filter('trustAsHtml', function($sce) {
  return function(html) {
    return $sce.trustAsHtml(html);
  };
});