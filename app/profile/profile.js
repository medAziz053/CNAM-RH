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
        	$http.get('http://localhost:8080/agentservice/agents/'+$rootScope.globals.currentUser.matricule).
        		then(function(response) {
        			$scope.profile = response;
        			});
        });