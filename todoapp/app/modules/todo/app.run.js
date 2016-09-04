
(function () {
    'use strict';

    angular
        .module('todo')
        .run(appRun);
    appRun.$inject = ['$rootScope', 'taskService'];

    //application pre-run things goes here
    function appRun($rootScope, taskService) {

        //load all tasks
        loadAllTasks();
        function loadAllTasks() {
            taskService.getAllTasks().then(function(response) {
                $rootScope.ALL_TASKS = response.data;
            }, function(error){
                console.log(error.data.errors);
            });
        }
    }
})();