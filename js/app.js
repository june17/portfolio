var pf=angular.module('portfolio',['ngRoute','pfControllers','pfDirectives']);

pf.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl : 'templates/home.html',
		controller:'mainController'
	})
	.when('/story',{
		templateUrl : 'templates/story.html',
		controller:'storyController'
	});
});