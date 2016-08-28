(function () {
    'use strict';

    angular
        .module('todo')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
    
    function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
        // use the HTML5 History API
        $locationProvider.html5Mode(true);

        $stateProvider.state('dashboard', {
            url: '/dashboard',
            templateUrl: '/app/partials/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dc'
        });

        $urlRouterProvider.otherwise('/dashboard');
    }
}());