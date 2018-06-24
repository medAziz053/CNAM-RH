'use strict';

angular.module('myApp.pilotage', ['ngRoute', 'chart.js'])

.config(['$routeProvider', function($routeProvider, ChartJsProvider) {
  $routeProvider.when('/pilotage', {
    templateUrl: 'pilotage/pilotage.html',
    controller: 'PilotageCtrl'
  });
}])

.controller('PilotageCtrl', function($scope,$http) {
	$scope.labels = ['2012', '2013', '2013', '2014','2015', '2016', '2017','2018'];
  	$scope.series = [
  					'Demandes d\'avances sur salaire', 
  					'Demandes d\'avances sur salaire validées',
					'Demandes d\'avances sur salaire en attente'
					];

	$scope.colors = [ '#EAF1F5', '#F8F8F8', '#FDDADB'];

	$http.get('http://localost:8080/pilotageservice/pilotage')
		.then(function(response) {
			$scope.data = response.data;
		});
	//$scope.colors = [[234, 241, 245], [248, 248, 248], [253, 218, 219]];
/*
	[serie1 of year 1, serie 1 of year2, .....]
*/
});