(function() {
	"use strict";
	var app = angular.module('ssTest');
	app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
			/* .state('login', {
			 url: '/',
			 templateUrl: BASE_URL_FOR_ROUTER + 'auth/view.html',
			 controller: 'AuthorizationCtrl'
			 })
			 .state('admin', {
			 url: '/homeAdmin',
			 templateUrl: BASE_URL_FOR_ROUTER + 'admin/view.html',
			 controller: 'AdminCtrl'
			 })
			 .state('user', {
			 url: '/homeUser',
			 templateUrl: BASE_URL_FOR_ROUTER + 'subjects/view.html'
			 })*/
			.state('groups', {
				url: '/groups',
				templateUrl: TABLE_TEMPLATES_URL,
				controller: 'GroupsListCtrl'
			})
			.state('subjects', {
				url: '/subjects',
				templateUrl: TABLE_TEMPLATES_URL,
				controller: 'SubjectsListCtrl'
			})
			.state('specialities', {
				url: '/specialities',
				templateUrl: TABLE_TEMPLATES_URL,
				controller: 'SpecialitiesListCtrl'
			})
			.state('faculties', {
				url: '/faculties',
				templateUrl: TABLE_TEMPLATES_URL,
				controller: 'FacultiesListCtrl'
			})
	}]);

}());