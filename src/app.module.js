'use strict';

/* Module */

var ssTest = angular.module('ssTest', [
    'ui.router',
    'subjectCtrl'
]);

ssTest.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('subjects', {
        url: '/',
        templateUrl: 'http://dtapi.local/~pupkin/components/subjects/view.html'
    })
}]);
