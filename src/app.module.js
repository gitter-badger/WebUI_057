'use strict';

/* Module */
var ssTest = angular.module('ssTest', [
    'ui.router',
    'subjectCtrl',
    'facultyCtrl',
    'specialityCtrl',
    'authorization',
    'admin'
]);

ssTest.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
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
        })
        .state('groups', {
            url: '/groups',
            templateUrl: BASE_URL_FOR_ROUTER + 'subjects/view.html'
        })*/
        .state('subjects', {
            url: '/subjects',
            templateUrl: BASE_URL_FOR_ROUTER + 'templates/table.html',
            controller: 'SubjectsListCtrl'
        })
        .state('specialities', {
            url: '/specialities',
            templateUrl: BASE_URL_FOR_ROUTER + 'templates/table.html',
            controller: 'SpecialitiesListCtrl'
        })
        .state('faculties', {
            url: '/faculties',
            templateUrl: BASE_URL_FOR_ROUTER + 'templates/table.html',
            controller: 'FacultiesListCtrl'
        })
}]);


