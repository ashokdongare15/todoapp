(function () {
    'use strict';

    angular
        .module('todo')
        .config(appConfig);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$translateProvider'];
    
    function appConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider ) {
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

        // add translation table
        $translateProvider.useStaticFilesLoader({
            prefix: 'app/i18n/messages-',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en')
            .fallbackLanguage('en');

        // Enable escaping of HTML
        $translateProvider.useSanitizeValueStrategy('sanitize');
    }
})();