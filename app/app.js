'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
	config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('CNAM-RH');

		$routeProvider
		          .when('/', {
		              controller: 'view1Controller',
		              templateUrl: 'view1/view1.html',
		              controllerAs: 'vm'
		          })

		          .when('/login', {
		              controller: 'LoginController',
		              templateUrl: 'login/login.html',
		              controllerAs: 'vm'
		          })

		          .when('/register', {
		              controller: 'RegisterController',
		              templateUrl: 'register/register.html',
		              controllerAs: 'vm'
		          })

		          .otherwise({ redirectTo: '/login' });
	}]).

	run(['$rootScope', '$location', '$cookieStore', '$http', function($rootScope, $location, $cookieStore, $http) {
	// keep user logged in after page refresh
	    $rootScope.globals = $cookieStore.get('globals') || {};
	    if ($rootScope.globals.currentUser) {
	        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
	    }

	    $rootScope.$on('$locationChangeStart', function (event, next, current) {
	        // redirect to login page if not logged in and trying to access a restricted page
	        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
	        var loggedIn = $rootScope.globals.currentUser;
	        if (restrictedPage && !loggedIn) {
	            $location.path('/login');
	        }
	    });
	}]);