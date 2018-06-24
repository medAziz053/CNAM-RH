'use strict';

angular.module('myApp.avances', ['ngRoute', 'ui.router'])

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

.controller('AvancesCtrl', function($scope, $rootScope, $http, $state) {
	
	$scope.isAdmin = $rootScope.globals 
					&& $rootScope.globals.currentUser 
					&& $rootScope.globals.currentUser.type === "admin";
	$scope.personelMatricule = ($scope.isAdmin) ? null : $rootScope.globals.currentUser.matricule; 

	$http.get('http://localhost:8080/avanceservice/avances').
		then(function(response) {
			$scope.avances = response.data;
			if($scope.personelMatricule) {
				const reducer = (accumulator, currentValue) => {
					if (currentValue.matricule === $scope.personelMatricule) {
						accumulator.concat(currentValue);
					}
				}
				$scope.avances = $scope.avances.reduce(reducer, []);
			}
		});

	$scope.accepter = (id) => {
		var etat = "acceptée"
		$http.get('http://localhost:8080/avanceservice/avances/'+id+'/'+etat).
		then(function(response) {
			$state.reload();
			$location.path('/avances');
		});		
	}

	$scope.refuser = (id) => {
		var etat = "refusée"
		$http.get('http://localhost:8080/avanceservice/avances/'+id+'/'+etat).
		then(function(response) {
			$state.reload();
			$location.path('/avances');
		});	
	}

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

})
.directive('ngConfirmClick', [
    function(){
        return {
            link: function ($scope, element, attr) {
                var msg = attr.ngConfirmClick || "Are you sure?";
                var clickAction = attr.confirmedClick;
                element.bind('click',function (event) {
                    if ( window.confirm(msg) ) {
                        $scope.$eval(clickAction)
                    }
                });
            }
        };
}])