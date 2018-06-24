'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngCookies',
  'myApp.login',
  'myApp.profile',
  'myApp.personel',
  'myApp.avances',
  'myApp.pilotage',
  'myApp.amortissement',
  'myApp.version'
]).
	config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
		$locationProvider.hashPrefix('!');

		$routeProvider
		     	  .when('/', {
		              controller: 'PersonelCtrl',
		              templateUrl: 'personel/personel.html',
		              controllerAs: 'vm'
		          })

		          .when('/login', {
		              controller: 'LoginController',
		              templateUrl: 'login/login.html',
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
	    	$rootScope.globals = $cookieStore.get('globals') || {};
	        // redirect to login page if not logged in and trying to access a restricted page
	        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
	        var loggedIn = $rootScope.globals.currentUser;
	        if (restrictedPage && !loggedIn) {
	            $location.path('/login');
	        }
	    });
	}]).

	component('navbar', {
		templateUrl: 'navbar/navbar.html',
		controller: NavbarController
	});

	function NavbarController ($rootScope, $location) {
		var ctrl = this;
		ctrl.currentUser = $rootScope.globals.currentUser || null; 
		ctrl.isAdmin = $rootScope.globals && $rootScope.globals.currentUser && $rootScope.globals.currentUser.type === 'admin';
		ctrl.logout = () => {
			$location.path('/login');
		}
	}