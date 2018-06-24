'use strict';

angular.module('myApp.profile', [])
		.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {

		$routeProvider
		     	  .when('/profile', {
		              controller: 'ProfileController',
		              templateUrl: 'profile/profile.html'
		          });
		}])
        .controller('ProfileController', function($scope) {
        	$scope.profile = 
        	{
						'id': 1,
						'name': 'Bouhammi Sami',
			     		'birth': '29/01/1990',
			     		'birthPlace': 'Tunis',
			      		'registrationNumber':201250,
			      		'familySituation': 'célibataire',
			      		'grade': 'Administrateur principale 1er degré',
			      		'recruitementDate': '06/12/2015',
			      		'childenCount': 10,
			      		'position': 'Actif'
			};
        });