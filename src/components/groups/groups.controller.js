'use strict';

var groupCtrl = angular.module('group', []);
groupCtrl.controller('GroupsListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'group/getRecords').success(function (data) {
        var arr = [];
        for (var i = 0; i < data.length; i++) {
            var obj = [];
            for (var key in data[i]) {
                if (key.slice(key.length-3, key.length) == '_id') continue;
                obj.push(data[i][key]);
            }
            arr.push(obj);
        }
        $scope.data = arr;
    });

    $scope.title1 = 'Групи';
    $scope.title2 = 'Група';
    $scope.sortcol = 0;

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