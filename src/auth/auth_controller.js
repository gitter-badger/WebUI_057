auth.controller("AuthorizationCtrl", ["$scope", "$http", "$window",
	function($scope, $http, $window) {
		$scope.url = "/login/index";
		$scope.dataLoading = false;

		$scope.login = function() {
			$scope.authData = JSON.stringify({
				username: $scope.userName,
				password: $scope.password
			});
			$scope.dataLoading = true;

			$http.post($scope.url, $scope.authData)
				.success(function(data, status) {
					$scope.status = status;
					$scope.data = data;
					$scope.checkResponse(data);
				})
				.error(function(data, status) {
					$scope.status = status || "Запит відхилено.";
					$scope.data = data;
				});
		};

		$scope.checkResponse = function(data) {
			if (data.response === "ok") {
				$scope.removeAlarm();
				$window.location.href = "../admin/admin.html";
			} else {
				$scope.generateSpanElem();
				$scope.dataLoading = false;
			}
		};

		$scope.generateSpanElem = function() {
			$scope.removeAlarm();

			var span = document.createElement("span");
			span.innerHTML = "Невірний логін або пароль!";
			span.classList.add('spanSubmit');
			document.getElementById('submit').insertAdjacentElement("beforeEnd", span);
		};

		$scope.removeAlarm = function() {
			var div = document.getElementById('submit'),
				span = div.querySelector('.spanSubmit');
			if (span) {
				div.removeChild(span);
			}
		};
}]);