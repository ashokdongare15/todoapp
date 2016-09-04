(function(){
    'use strict';

    angular
        .module('todo.dashboard')
        .factory('taskService', taskService);

    taskService.$inject = ['$q', '$http', '$log'];

    function taskService($q, $http, $log) {

        //interface to provide all available functions
        var service = {
            getAllTasks: getAllTasks
        };

        return service;

        /**
         * Get all the available tasks from the system
         * @returns {*|promise}
         */
        function getAllTasks() {

            var differed = $q.defer();
            //response.data
            $http.get('/app/data/tasks.json').then(function(response) {
                $log.info('In success..');
                differed.resolve(response);
            }, function(error) {
                console.log(error.data);
                differed.reject(error);
            });
            return differed.promise;
        }
    }
})();