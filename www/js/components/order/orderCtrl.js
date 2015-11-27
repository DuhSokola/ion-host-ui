;(function () {
  'use strict';

  var dependencies = [];

  var orderCtrl = angular.module('app.order.ctrl', dependencies);

  orderCtrl.controller('OrderCtrl', ['$scope', function ($scope, $stateParams) {
  }]);

  orderCtrl.controller('OrderSelectCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

    $scope.selectedOptions = {
      testDrive: ($stateParams.selected == 'testdrive' || $stateParams.selected == 'testdriveAndCatalog' ? true : false),
      catalog: ($stateParams.selected == 'catalog' || $stateParams.selected == 'testdriveAndCatalog' ? true : false)
    };

    $scope.selectTestDrive = function () {
      $scope.selectedOptions.testDrive = !$scope.selectedOptions.testDrive;

    };

    $scope.selectCatalog = function () {
      $scope.selectedOptions.catalog = !$scope.selectedOptions.catalog;
    };

  }]);

}());
