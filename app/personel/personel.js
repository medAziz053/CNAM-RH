'use strict';

angular.module('myApp.personel', ['ngRoute'])

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

.controller('PersonelCtrl', function($scope, $rootScope, $location) {
	$scope.personel = [{
						'id': 1,
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif'
			      	  },
			      	  {
			      	  	'id': 2,
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif'
			      	  },
			      	  {
			      	  	'id': 3,
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif'
			      	  },
			      	  {
			      	  	'id': 4,
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif'
			      	  }];

	$scope.addPersonel = () => {
		$location.path('/personel/add');
	}

	$scope.removePersonel = function(id) {
		console.log('remove');
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
.controller('editPersonelController', function($scope, $rootScope, $location) {
	$scope.personel = $rootScope.personelToEdit;
	$rootScope.personelToEdit = null;
	$scope.cancel = function () {
		$location.path('/personel');
	}
	$scope.save = () => {
		//update
		$location.path('/personel');
	}
})
.controller('addPersonelController', function($scope, $location) {
	$scope.cancel = function () {
		$location.path('/personel');
	}
	$scope.save = () => {
		//update
		$location.path('/personel');
	}	
});