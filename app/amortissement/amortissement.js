'use strict';

angular.module('myApp.amortissement', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/amortissement', {
    templateUrl: 'amortissement/amortissement.html',
    controller: 'AmortissementCtrl'
  });
}])

.controller('AmortissementCtrl', function($scope, $http) {
	var months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
	$scope.chercher = () => {
		var date1 = $scope.echeance.split('-')[0];
		var date2 = $scope.echeance.split('-')[1];
		var result = null;
	}

	$scope.amortissements = {};

	function getAmortissements () {
		$http.get('http://localhost:8080/amortissementservice/amortissements').then(function(response) {
        	$scope.amortissements = response;
        	$scope.amortissements.forEach((am) => {
        		am.moisString = months[am.mois + 1];
        	});
        });
	}
});