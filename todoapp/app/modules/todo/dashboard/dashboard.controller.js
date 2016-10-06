(function () {
    'use strict';

    angular
        .module('todo.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope','$rootScope', 'taskService', '$uibModal'];

    function DashboardController($scope, $rootScope, taskService, $uibModal) {
        var dc = this;
        dc.taskStatuses= ['Completed', 'Draft', 'Inprogress', 'Rejected', 'Invalid'];

        dc.loadAllTasks = loadAllTasks;
        dc.renderAddTaskForm = renderAddTaskForm;

        //load all tasks at run time
        loadAllTasks();
        function loadAllTasks() {
            taskService.getAllTasks().then(function(response) {
                $rootScope.ALL_TASKS = response.data;
            }, function(error){
                console.log(error.data.errors);
            });
        }

        function renderAddTaskForm() {

            var modalInstance = $uibModal.open({
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true,
                templateUrl : 'app/partials/addTask.html',
                controller : function($scope, $uibModalInstance) {
                    var $ctrl = this;
                    $ctrl.cancel = function () {
                        $uibModalInstance.dismiss('cancel');
                    };
                },
                controllerAs:'$ctrl',
                resolve: {} // empty storage
            });

            modalInstance.result.then(function(){
                //on ok button press
            }, function() {
                //on cancel button press
                console.log("Modal Closed");
            });
        }
    }
}());