'use strict';

var facultyCtrl = angular.module('faculty', []);
facultyCtrl.controller('FacultiesListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'faculty/getRecords').success(function (data) {
        $scope.thData = [['Факультети', true], ['Опис', false]];
        $scope.data = idDelete(data);
    });
}]);
