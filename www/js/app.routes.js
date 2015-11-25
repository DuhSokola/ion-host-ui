;(function(){
    'use strict';

    var deps = [
        'app.home',
        'app.catalog'
    ];

    var route = angular.module('app.routes',deps);

    route.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'js/components/home/_home.html',
                controller: ''
            })
            .state('catalog', {
                url: '/catalog',
                templateUrl: 'js/components/catalog/_catalog.html',
                controller: ''
            });
    });

}());
