'use strict';

/* Module */
var ssTest = angular.module('ssTest', [
    'ui.router',
    'authorization',
    'admin',
    'user',
    'table'
    /*'subjectCtrl',
    'facultyCtrl',
    'specialityCtrl'*/
]);

ssTest.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('auth', {
            url: '/',
            templateUrl: /*URL_FOR_ROUTER + 'auth/view.html'*/'dtapi.local/~pupkin/dist_dev/partials/auth/view.html'
        })
        .state('admin', {
            url: '/admin',
            templateUrl: URL_FOR_ROUTER + 'admin/view.html'
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

         .state('user', {
         url: '/homeUser',
         templateUrl: URL_FOR_ROUTER + 'user/view.html'
         });
        /*.state('groups', {
         url: '/groups',
         templateUrl: BASE_URL_FOR_ROUTER + 'subjects/view.html'
         })
         */
        /*.state('subjects', {
            url: '/subjects',
            templateUrl: BASE_URL_FOR_ROUTER + 'partials/subjects/view.html'
        })
        .state('specialities', {
            url: '/specialities',
            templateUrl: BASE_URL_FOR_ROUTER + 'partials/specialities/view.html'
        })
        .state('faculties', {
            url: '/faculties',
            templateUrl: BASE_URL_FOR_ROUTER + 'partials/faculties/view.html'
        })*/
}]);


