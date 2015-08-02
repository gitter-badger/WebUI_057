'use strict';

var subjectCtrl = angular.module('subject', []);
subjectCtrl.controller('SubjectsListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'subject/getRecords').success(function (data) {
        $scope.thData = [['Предмет', true], ['Опис', false]];
        $scope.data = idDelete(data);
    });
}]);

