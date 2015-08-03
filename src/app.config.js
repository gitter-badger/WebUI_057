(function() {
	"use strict";
	var app = angular.module('ssTest');
	app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
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
			.state('addGroups', {
				url: '/addgroup',
				templateUrl: 'components/addGroup/addGroup.html',
				controller: 'AddGroupCtrl',
				title: 'Додати групу'
			})
	}]);


	app.factory('Rest', ['$resource', function ($resource) {
		return $resource(':entity/:action/:id', {}, {
			getAll: {method: 'GET', params: {entity: "@entity", action:"getRecords"}},
			get: {method: 'GET', params: {entity: "@entity", action:"getRecords", id:"@id"}},
			getRange: {method: 'GET', url: 'group/:action/:qnty/:indent', params: {entity: "@entity", action:"getRecords", qnty:"@qnty", indent:"@indent"}},
			count: {method: 'GET', params: {entity: "@entity", action:"countRecords"}},
			update: {method: 'POST', params: {entity: "@entity", action:"update", id:"@id"}},
			delete: {method: 'POST', params: {entity: "@entity", action:"del", id:"@id"}},
			add: {method: 'POST', params: {entity: "@entity", action:"insertData"}}
		});
	}]);

	Rest.getAll({
		entity: 'group'
	});
	Rest.getAll({
		entity: 'group',
		id: 1
	});
}());