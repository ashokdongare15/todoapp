(function() {
   'use strict';

    angular
        .module('todo')
        .directive('renderTask', renderTask);

    renderTask.$inject = [];

    function renderTask() {
        return {
            restrict: 'E',
            scope: {
                taskInfo: '=taskDetails'
            },
            templateUrl: '/app/partials/taskBox.html'
        };
    }
})();