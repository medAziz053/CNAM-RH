'use strict';

angular.module('myApp.pilotage', ['ngRoute', 'chart.js'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/pilotage', {
    templateUrl: 'pilotage/pilotage.html',
    controller: 'PilotageCtrl'
  });
}])

.controller('PilotageCtrl', function($scope) {
	$scope.labels = ['2010', '2011', '2012', '2013', '2013', '2014'];
  	$scope.series = [
  					'Demandes d\'avances sur salaire', 
  					'Demandes d\'avances sur salaire validées',
					'Demandes d\'avances sur salaire en attente'
					];
	$scope.colors = ['Blue', 'Green', 'Red'];
/*
	[serie1 of year 1, serie 1 of year2, .....]
*/
	$scope.data = [
	[40, 30, 10, 25, 32, 12],
	[10, 3 , 7 , 5 , 11, 3 ],
	[30, 17, 3 , 20, 21, 9 ]
	];
});