app.controller('OneCtrl',OneCtrl);

function OneCtrl($filter, entrySrv, $state, $scope, $stateParams, api, entry){
	var ctrl = this;
	ctrl.entrySrv = entrySrv;
	ctrl.$state = $state;
	ctrl.$stateParams = $stateParams;
	ctrl.entry = entry;
	ctrl.$filter = $filter;

	ctrl.entry_delete = 'Delete Entry';

	if($stateParams.entryId != undefined){
	entrySrv.getEntry($stateParams.entryId)
	.then(function(res){
		console.log(res);
		ctrl.entry = res;
		});
	};

	ctrl.myHTML = ctrl.entry.content;
}

OneCtrl.prototype.deleteEntry = function(){
	var ctrl = this;

	ctrl.entrySrv.deleteEntry(ctrl.entry.id, ctrl.entry)
	.then(function(res){
		ctrl.$state.go('admin.page');
	})
}

app.filter('trustAsHtml', function($sce) {
  return function(html) {
    return $sce.trustAsHtml(html);
  };
});