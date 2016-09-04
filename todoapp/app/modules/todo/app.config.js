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
            url: '/',
            templateUrl: '/app/partials/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'dc'
        }).state('notavailable', {
            url:'/notavailable',
            templateUrl: '/app/partials/notFound.html'
        });

        $urlRouterProvider.otherwise('/notavailable');
    }
})();