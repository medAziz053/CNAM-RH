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

.controller('AvancesCtrl', function($scope) {
	$scope.avances = [{
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif',
			      		'status': 'in progress'
			      	  },
			      	  {
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif',
			      		'status': 'accepted'
			      	  },
			      	  {
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif',
			      		'status': 'refused'
			      	  },
			      	  {
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif',
			      		'status': 'in progress'
			      	  }];
})
.controller('AjoutAvanceCtrl', function($scope) {

});