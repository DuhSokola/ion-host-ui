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
    "TITLE" : "CH",
    "USER_LABEL" : "Erfassende Person",
    "BRAND_SELECT_LABEL":"Marke",
    "CAMPAIGN_SELECT_LABEL":"Kampagne",
    "CAR_AUDI_SELECT":"Audi",
    "CAR_SEAT_SELECT":"Seat",
    "CAR_SKODA_SELECT":"Skoda",
    "CAR_VW_SELECT":"Volkswagen",
    "CAMPAIGN_GENEVA_SELECT":"Autosalon Genf 2016",
    "CAMPAIGN_ZURICH_SELECT":"Autosalon Zürich 2016",
    "ERROR_LOGIN_HOSTNAME_EMPTY":"Erfassende Person wurde nicht definiert",
    "ERROR_LOGIN_CARBRAND_EMPTY":"Marke wurde nicht definiert",
    "ERROR_LOGIN_CAMPAIGN_EMPTY":"Kampaigne wurde nicht definiert"
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
