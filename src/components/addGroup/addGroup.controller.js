(function() {
	"use strict";
	angular.module('addGroup').controller('AddGroupCtrl', ["$scope", "$http", "$modal", "BASE_URL", function($scope, $http, $modal, BASE_URL) {

		$scope.group = {};
		$scope.formSubmitSend = false;

		$http.get(BASE_URL + "/faculty/getRecords")
			.success(function(data) {
				$scope.faculties = data;
			});

		$http.get(BASE_URL + "/speciality/getRecords")
			.success(function(data) {
				$scope.specialities = data;
			});

		var open = function(data) {
			$modal.open({
				animation: true,
				templateUrl: 'components/modal/modal.html',
				controller: 'ModalCtrl',
				resolve: {
					data: function() {
						return data;
					}
				}
			});
			$scope.formSubmitSend = false;
		};

		var onError = function(data) {
			open({
				title: "Error.",
				log: data.response
			})
		};

		var resetForm = function() {
			$scope.addGroupForm.$setPristine();
			$scope.group = {};
			$scope.formSubmited = false;
		};

		$scope.addFaculty = function() {
			$scope.formSubmitSend = true;

			var facultyData = {
				group_name: $scope.group.group_name,
				speciality_id: $scope.group.speciality_id,
				faculty_id: $scope.group.faculty_id
			};

			//var  facultyData = $scope.group;
			// console.log($scope.group);
			//console.log(JSON.parse($scope.group));

			$http.post(BASE_URL + '/group/insertData', facultyData)
				.success(function(data) {
					if (data.response === "ok") {
						open({
							title: "Success!",
							log: "You have added new group \"" + $scope.group.group_name + "\"! Would you like to continue your work with it?",
							groupId: data.id
						});
						resetForm();
					} else {
						onError(data)
					}
				})
				.error(function(data) {
					onError(data)
				});
		}

	}]);
}());