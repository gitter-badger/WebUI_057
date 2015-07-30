'use strict';

var facultyCtrl = angular.module('facultyCtrl', []);
facultyCtrl.controller('FacultiesListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'faculty/getRecords').success(function (data) {
        $scope.faculties = data;
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
