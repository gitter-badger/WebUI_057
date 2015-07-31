'use strict';

var specialityCtrl = angular.module('specialityCtrl', []);
specialityCtrl.controller('SpecialitiesListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'speciality/getRecords').success(function (data) {
        var arr = [];
        for (var i = 0; i < data.length; i++) {
            var obj = {};
            for (var key in data[i]) {
                if (key.slice(key.length-3, key.length) == '_id') continue;
                obj[key] = data[i][key];
            }
            arr.push(obj);
        }
        $scope.data = arr;
    });

    $scope.title1 = 'Спеціальності';
    $scope.title2 = 'Спеціальність';
    $scope.name = 'speciality_name';

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