'use strict';

angular.module('myApp.personel', ['ngRoute', 'ui.router'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/personel', {
    templateUrl: 'personel/personel.html',
    controller: 'PersonelCtrl'
  })
  .when('/personel/edit', {
  	templateUrl: 'personel/editPersonel.html',
  	controller: 'editPersonelController'
  })
  .when('/personel/add', {
  	templateUrl: 'personel/editPersonel.html',
  	controller: 'addPersonelController'
  })
}])

.controller('PersonelCtrl', function($scope, $rootScope, $location, $state, $http) {
	
	$scope.personel = null;

	$http.get('http://localhost:8080/agentservice/agents').
        then(function(response) {
        	$scope.personel = response.data;
        });

	$scope.addPersonel = () => {
		$http.post('http://localhost:8080/agentservice/agents/create',).
        then(function(response) {
        	$state.reload();
        });
		$location.path('/personel/add');
	}

	$scope.removePersonel = function(id) {
		$http.delete('http://localhost:8080/agentservice/agents/delete/'+ id).
        then(function(response) {
        	$state.reload();
        });
	}

	$scope.editPersonel = function(personel) {
		$location.path('/personel/edit');
		$rootScope.personelToEdit = personel;
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
.controller('editPersonelController', function($scope, $rootScope, $location, $http) {
	$scope.personel = $rootScope.personelToEdit;
	$rootScope.personelToEdit = null;
	$scope.cancel = function () {
		$location.path('/personel');
	}
	$scope.save = () => {
		$http.post('http://localhost:8080/agentservice/agents/create', $scope.personel).
        then(function(response) {
			$location.path('/personel');
        });
	}
})
.controller('addPersonelController', function($scope, $location, $http) {
	$scope.cancel = function () {
		$location.path('/personel');
	}
	$scope.save = () => {
		$http.post('http://localhost:8080/agentservice/agents/create', $scope.personel).
        then(function(response) {
			$location.path('/personel');
        });
	}	
});