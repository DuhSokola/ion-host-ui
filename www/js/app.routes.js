;(function(){
    'use strict';

    var deps = [
        'app.home',
        'app.order'
    ];

    var route = angular.module('app.routes',deps);

    route.config(function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/order');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'js/components/home/_home.html',
                controller: 'HomeCtrl'
            })
            .state('order', {
                url: '/order',
                templateUrl: 'js/components/order/_order.html',
                controller: 'OrderCtrl'
            })
            .state('order/select', {
                url: '/order/select/:selected',
                templateUrl: 'js/components/order/_order.select.html',
                controller: 'OrderSelectCtrl'
            });
    });

}());
