var pfdirectives=angular.module('pfDirectives',[]);
 
 pfdirectives
	.directive('storyItem', function(){
	return{
		restrict: 'E',
		templateUrl: 'templates/storyitem.html'
		}
	});