'use strict';

angular.module('Authentication')

	.controller('LoginController',
	['$scope', '$rootScope', '$location', 'AuthenticationService',
		function ($scope, $rootScope, $location, AuthenticationService) {
			// reset login status
			AuthenticationService.ClearCredentials();

			$scope.login = function () {
				$scope.dataLoading = true;
				AuthenticationService.Login($scope.userName, $scope.password, function(response) {
					if(response.success) {
						AuthenticationService.SetCredentials($scope.userName, $scope.password);
						$location.path('/admin');
					} else {
						$scope.error = response.message;
						$scope.dataLoading = false;
					}
				});
			};
		}]);