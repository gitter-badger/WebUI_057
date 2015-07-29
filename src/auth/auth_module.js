'use strict';

//declare modules

angular.module('Authentication', []);
angular.module('Admin', []);

angular.module('SoftServeTesting', [
	'Authentication',
	'Admin',
	'ngRoute',
	'ngCookies'
])
	.config(['$routeProvider', function ($routeProvider) {

		$routeProvider
			.when('/', {
				controller: 'LoginController',
				templateUrl: 'auth.html',
				hideMenus: true
			})

			.when('/admin', {
				controller: 'AdminController',
				templateUrl: '../admin/admin.html'
			})

			.otherwise({ redirectTo: '/' });
	}])

	.run(['$rootScope', '$location', '$cookieStore', '$http',
		function ($rootScope, $location, $cookieStore, $http) {
			// keep user logged in after page refresh
			$rootScope.globals = $cookieStore.get('globals') || {};
			if ($rootScope.globals.currentUser) {
				$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
			}

			$rootScope.$on('$locationChangeStart', function (event, next, current) {
				// redirect to login page if not logged in
				if ($location.path() !== '/' && !$rootScope.globals.currentUser) {
					$location.path('/');
				}
			});
		}]);
