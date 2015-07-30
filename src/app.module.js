'use strict';

/* Controllers */

var ssTest = angular.module('ssTest', ['ui.router']);

ssTest.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('subjects', {
        url: '/',
        templateUrl: 'http://dtapi.local/~pupkin/components/subjects/view.html'
    })
}]);

ssTest.controller('SubjectsListCtrl', ['$scope', '$http', function($scope, $http) {
    $http.get('http://ec2-54-69-82-91.us-west-2.compute.amazonaws.com/subject/getRecords').success(function(data) {
        $scope.subjects = data;
    });

    $scope.sortField = undefined;
    $scope.reverse = false;

    $scope.sort = function(fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.sortField =fieldName;
            $scope.reverse = false;
        }
    }
}]);
