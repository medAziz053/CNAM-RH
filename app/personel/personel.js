'use strict';

angular.module('myApp.personel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/personel', {
    templateUrl: 'personel/personel.html',
    controller: 'PersonelCtrl'
  });
}])

.controller('PersonelCtrl', function($scope) {
	$scope.personel = [{
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
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif'
			      	  }];
});