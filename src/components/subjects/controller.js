'use strict';

var subjectCtrl = angular.module('subjectCtrl', []);
subjectCtrl.controller('SubjectsListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'subject/getRecords').success(function (data) {
        $scope.subjects = data;
    });

    $scope.sortField = undefined;
    $scope.reverse = false;
    $scope.sort = function (fieldName) {
        if ($scope.sortField === fieldName) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.sortField = fieldName;
            $scope.reverse = false;
        }
    }
}]);
