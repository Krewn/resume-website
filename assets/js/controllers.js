'use strict';

/* Controllers */
var resumeAppControllers = angular.module('resumeAppControllers', []);

resumeAppControllers.controller('homeController', ['$scope', '$http',
	function($scope, $http) {
	$scope.skills = [
		{
			'tool': 'HTML',
			'interest': '10'
		},
		{
			'tool': 'SQL',
			'interest': '10'
		}
	]
}]);