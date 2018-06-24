'use strict';

angular.module('myApp.avances', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/avances', {
    templateUrl: 'avances/avances.html',
    controller: 'AvancesCtrl'
  });
  $routeProvider.when('/avances/add', {
    templateUrl: 'avances/ajoutAvance.html',
    controller: 'AjoutAvanceCtrl'
  });
}])

.controller('AvancesCtrl', function($scope, $http) {
	$http.get('http://localhost:8080/avanceservice/avances').
		then(function(response) {
			$scope.avances = response.data;
		});
})
.controller('AjoutAvanceCtrl', function($scope,$http,$location) {
	$scope.demande = {};
	$scope.demande.etat = "en attente";
	$scope.cancel = () => {
		$location.path('/avances');
	}
	$scope.save = () => {
		$http.post('http://localhost:8080/avanceservice/avances/create', $scope.demande).
        then(function(response) {
			$location.path('/avances');
        });
	}

});