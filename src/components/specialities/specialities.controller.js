'use strict';

var specialityCtrl = angular.module('speciality', []);
specialityCtrl.controller('SpecialitiesListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'speciality/getRecords').success(function (data) {
        var thData = [['Спеціальності', true], ['Опис', false]];
        $scope.data = idDelete(data);
        $scope.thData = markIndexes(thData);
    });
}]);