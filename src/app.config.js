'use strict';

angular.module('ssTest', [
    'ui.router',
    'authorization',
    'admin',
    'table'
]);
angular.module('ssTest')
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('auth', {
                url: '/',
                templateUrl: URL_FOR_ROUTER + 'auth/auth.html',
                controller: 'AuthorizationCtrl'
            })
            .state('admin', {
                url: '/admin',
                templateUrl: URL_FOR_ROUTER + 'admin/admin.html'
            })/*
         .state('user', {
         url: '/homeUser',
         templateUrl: BASE_URL_FOR_ROUTER + 'subjects/view.html'
         })*/
    }]);
