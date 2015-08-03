angular.module('ssTest', [
	'ui.router',
	'authorization',
	'admin',
	'ui.bootstrap'
]);
angular.module('ssTest')
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('auth', {
				url: '/',
				templateUrl: 'partials/auth/view.html'
			})
			.state('admin', {
				url: '/admin',
				templateUrl: 'partials/admin/view.html'
			});
		/*
		 .state('user', {
		 url: '/homeUser',
		 templateUrl: BASE_URL_FOR_ROUTER + 'subjects/view.html'
		 })*/
	}]);
