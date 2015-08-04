(function() {
	"use strict";


	angular.module('addGroup').controller('ModalCtrl', ["$scope", "$modalInstance", 'data', function($scope, $modalInstance, data) {

		$scope.modalData = data;

		$scope.ok = function() {
			$modalInstance.close();
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};
	}]);

}());