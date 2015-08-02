(function() {
	"use strict";
	var app = angular.module('ssTest');

	var ModalCtrl = function($scope, $modalInstance, data) {

		$scope.modalData = data;

		$scope.ok = function() {
			$modalInstance.close();
		};

		$scope.cancel = function() {
			$modalInstance.dismiss('cancel');
		};
	};

	app.controller('ModalCtrl', ["$scope", "$modalInstance", 'data', ModalCtrl]);

}());