admin.controller("AdminCtrl", ["$scope", "$http", 'Calendar', function($scope, $http, Calendar) {
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

	$scope.date = new Date();

	Calendar();
}]);