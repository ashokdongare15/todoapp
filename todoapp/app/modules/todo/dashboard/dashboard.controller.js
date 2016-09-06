(function () {
    'use strict';

    angular
        .module('todo.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope','$rootScope', 'taskService'];

    function DashboardController($scope, $rootScope, taskService) {
        var dc = this;
        dc.taskStatuses= ['Completed', 'Draft', 'Inprogress', 'Rejected', 'Invalid'];

        dc.loadAllTasks = loadAllTasks;

        //load all tasks at run time
        loadAllTasks();
        function loadAllTasks() {
            taskService.getAllTasks().then(function(response) {
                $rootScope.ALL_TASKS = response.data;
            }, function(error){
                console.log(error.data.errors);
            });
        }
    }
}());