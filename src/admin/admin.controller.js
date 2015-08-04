angular.module('admin').controller("AdminCtrl", ["$scope", "$http", function($scope, $http) {

	$http.get('http://dtapi.local/faculty/countRecords').
		success(function(data, status, headers, config) {
			$scope.quantityFaculties = data.numberOfRecords;
			// this callback will be called asynchronously
			// when the response is available
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

	$http.get('http://dtapi.local/subject/countRecords').
		success(function(data, status, headers, config) {
			$scope.quantitySubjects = data.numberOfRecords;
			// this callback will be called asynchronously
			// when the response is available
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

	$http.get('http://dtapi.local/speciality/countRecords').
		success(function(data, status, headers, config) {
			$scope.quantitySpecialities = data.numberOfRecords;
			// this callback will be called asynchronously
			// when the response is available
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

	$http.get('http://dtapi.local/group/countRecords').
		success(function(data, status, headers, config) {
			$scope.quantityGroups = data.numberOfRecords;
			// this callback will be called asynchronously
			// when the response is available
		}).
		error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});

	$scope.date = new Date();

}]);