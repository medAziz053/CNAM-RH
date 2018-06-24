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
.controller('AjoutAvanceCtrl', function($scope) {
	$scope.avance = {};
	$scope.cancel = () => {
		$location.path('/avances');
	}
	$scope.save = () => {
		$http.post('http://localhost:8080/avancesservice/avances/create' $scope.avance).
        then(function(response) {
			$location.path('/avances');
        });
	}

});