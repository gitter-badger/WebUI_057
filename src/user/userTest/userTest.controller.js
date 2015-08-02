var BASE_URL = 'http://dtapi.local/';

var subjectCtrl = angular.module('subjectCtrl', []);
subjectCtrl.controller('SubjectsListCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.get(BASE_URL + 'subject/getRecords').success(function (data) {
		$scope.subjects = data;
	});

}]);
