'use strict';

angular.module('myApp.amortissement', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/amortissement', {
    templateUrl: 'amortissement/amortissement.html',
    controller: 'AmortissementCtrl'
  });
}])

.controller('AmortissementCtrl', function($scope) {
	$scope.chercher = () => {
		var date1 = $scope.echeance.split('-')[0];
		var date2 = $scope.echeance.split('-')[1];
		var result = null;
	}

	$scope.amortissements = [{
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
});