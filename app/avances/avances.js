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
	if($scope.isAdmin){
	$http.get('http://localhost:8080/avanceservice/avances').
		then(function(response) {
			$scope.avances = response.data;
			})	
	}else{
		$http.get('http://localhost:8080/avanceservice/avances/'+$rootScope.globals.currentUser.matricule).
		then(function(response) {
			$scope.avances = response.data;
			})	
	}

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
	if ($rootScope.globals.currentUser.type !== 'admin' && $rootScope.globals.currentUser.matricule) {
		$scope.demande.matricule = $rootScope.globals.currentUser.matricule;
	}
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