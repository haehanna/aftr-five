'use strict';

var app = angular.module('afApp',[
	'ui.router',
	'ngSanitize'
	]);

app.config(function($stateProvider, $httpProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise('main');

	$stateProvider
	.state('main',{
		url:'/',
		templateUrl: 'site/partials/main-nav.html',
		// controller: 
		// resolve:
	})

	.state('main.page',{
		url:'main',
		templateUrl: 'site/partials/main-page.html',
		controller: 'EntryCtrl as ctrl',
		resolve:{
			entries: function(entrySrv){
				return entrySrv.getEntries();
			}
		}
	})

	.state('admin',{
		url:'/admin',
		templateUrl: 'site/partials/admin-nav.html',
		// controller:
		// resolve:
	})

	.state('admin.page',{
		url:'/add',
		templateUrl: 'site/partials/admin-page.html',
		controller: 'EntryCtrl as ctrl',
		resolve:{
			entries: function(entrySrv){
				return entrySrv.getEntries();
			}
		}
	})

	.state('admin.entry',{
		url:'/entry/:entryId',
		templateUrl: 'site/partials/admin-entry.html',
		controller: 'OneCtrl as ctrl',
		resolve:{
			entry: function(entrySrv,$stateParams){
				return entrySrv.getEntry($stateParams.entryId);
			}

		}
	})

})