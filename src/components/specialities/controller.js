'use strict';

var specialityCtrl = angular.module('specialityCtrl', []);
specialityCtrl.controller('SpecialityListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'speciality/getRecords').success(function (data) {
        $scope.specialities = data;
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