
(function () {
    'use strict';

    angular
        .module('todo')
        .run(appRun);
    appRun.$inject = ['$rootScope'];

    //application pre-run things goes here
    function appRun($rootScope) {
    }
})();