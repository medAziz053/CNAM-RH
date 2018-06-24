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
		var date1 = $scope.echeance.split('-')[0] || null;
		var date2 = $scope.echeance.split('-')[1] || null;
		var montant = $scope.montant || -1;
		var matricule = $scope.matricule || null;

		var data = {matricule, date1, date2, montant};

		$http.post('http://localhost:8080/amortissementservice/amortissements/filtrage', {

		}).then(function(response) {
        	$scope.amortissements = response;
        	$scope.amortissements.forEach((am) => {
        		am.moisString = months[am.mois + 1];
        	});
        });
		var result = null;
	}

	$scope.amortissements = getAmortissements();

	function getAmortissements () {
		$http.get('http://localhost:8080/amortissementservice/amortissements').then(function(response) {
        	$scope.amortissements = response;
        	$scope.amortissements.forEach((am) => {
        		am.moisString = months[am.mois + 1];
        	});
        });
	}
});