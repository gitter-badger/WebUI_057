'use strict';

/* Module */
var ssTest = angular.module('ssTest', [
    'ui.router',
    'authorization',
    'admin',
    'subjectCtrl',
    'facultyCtrl',
    'specialityCtrl'
]);

ssTest.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'http://dtapi.local/~pupkin/src/auth/view.html'
        })
        .state('admin', {
            url: '/homeAdmin',
            templateUrl: 'http://dtapi.local/~pupkin/src/admin/view.html'
        })
        /*
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
            templateUrl: BASE_URL_FOR_ROUTER + 'subjects/view.html'
        })
        .state('specialities', {
            url: '/specialities',
            templateUrl: BASE_URL_FOR_ROUTER + 'specialities/view.html'
        })
        .state('faculties', {
            url: '/faculties',
            templateUrl: BASE_URL_FOR_ROUTER + 'faculties/view.html'
        })
}]);


