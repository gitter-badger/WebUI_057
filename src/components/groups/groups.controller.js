'use strict';

var groupCtrl = angular.module('group', []);
groupCtrl.controller('GroupsListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'group/getRecords').success(function (data) {
        var thData = [['Групи', true], ['Опис', false]];
        $scope.data = idDelete(data);
        $scope.thData = markIndexes(thData);
    });
}]);