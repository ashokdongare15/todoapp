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
                task: '=taskObj'
            },
            replace:true,
            templateUrl: '/app/partials/taskBox.html'
        };
    }
})();