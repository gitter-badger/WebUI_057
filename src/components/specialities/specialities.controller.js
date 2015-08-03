'use strict';
angular.module('speciality', []);
angular.module('speciality').controller('SpecialitiesListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get(BASE_URL + 'speciality/getRecords').success(function (data) {
        $scope.thData = [['Номер', true], ['Спеціальність', false]];
        $scope.data = idDelete(data);
    });
}]);