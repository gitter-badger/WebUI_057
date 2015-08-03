var authorization = angular.module("authorization", []);
authorization.controller("AuthorizationCtrl", ["$scope", "$http", "$state", "$window",
    function($scope, $http, $state, $window) {
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
                    alert($window.location.href);
                    alert("Error");
                    $scope.status = status || "Запит відхилено.";
                    $scope.data = data;
                });
        };

        $scope.checkResponse = function(data) {
            if (data.response === "ok") {
                $scope.removeAlarm();
                setTimeout(function() {
                    $state.go('admin.home');
                }, 2500);
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
            document.getElementById('submit').appendChild(span);
        };

        $scope.removeAlarm = function() {
            var div = document.getElementById('submit'),
                span = div.querySelector('.spanSubmit');
            if (span) {
                div.removeChild(span);
            }
        };
    }]);
