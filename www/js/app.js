// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var deps = [
  'ionic',
  'app.routes',
  'pascalprecht.translate'
];

var app = angular.module('starter', deps);

app.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function ($translateProvider) {
  $translateProvider.translations('de', {
    "GLOBAL_TITLE" : "CH",
    "LOGIN_INPUT_LABEL_USER" : "Erfassende Person",
    "LOGIN_SELECT_LABEL_BRAND":"Marke",
    "LOGIN_SELECT_LABEL_CAMPAIGN":"Kampagne",
    "LOGIN_SELECT_OPTION_CAR_AUDI":"Audi",
    "LOGIN_SELECT_OPTION_CAR_SEAT":"Seat",
    "LOGIN_SELECT_OPTION_CAR_SKODA":"Skoda",
    "LOGIN_SELECT_OPTION_CAR_VW":"Volkswagen",
    "LOGIN_SELECT_OPTION_CAMPAIGN_GENEVA":"Autosalon Genf 2016",
    "LOGIN_SELECT_OPTION_CAMPAIGN_ZURICH":"Autosalon Zürich 2016",
    "LOGIN_INPUT_SUBMIT":"Einloggen",
    "LOGIN_ERROR_FILL_ALL_FIELDS" : "Bitte alle Felder ausfüllen",
    "ORDER_TEXT_TESTDRIVE":"Probefahrt bestellen",
    "ORDER_TEXT_TESTDRIVE_AND_CATALOG":"Probefahrt und Katalog bestellen",
    "ORDER_TEXT_CATALOG":"Katalog bestellen"
  });
  $translateProvider.preferredLanguage('de');
});

/**
 * Example to switch language
 */
app.controller('MainCtrl',['$scope', function($scope){
  $scope.globals = {};
  $scope.globals.hostData = undefined;
  $scope.globals.cutomerData = undefined;

  $scope.globals.printAllGlobals = function() {
    console.log('---===START GLOBALS===---');
    console.log($scope.globals.hostData);
    console.log($scope.globals.cutomerData);
    console.log('---===END GLOBALS===---');
  }
}]);
