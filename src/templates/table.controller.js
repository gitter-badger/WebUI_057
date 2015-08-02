var table = angular.module('table', []);
table.controller('SortTableCtrl', ['$scope', function($scope){
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

function idDelete(data) {
    var arr = [];
    for (var i = 0; i < data.length; i++) {
        var obj = [];
        for (var key in data[i]) {
            if (key.slice(key.length-3, key.length) == '_id') {
                var idItem = data[i][key];
            } else {
                obj.push(data[i][key]);
            }
        }
        obj.push(idItem);
        arr.push(obj);
    }
    return arr;
}