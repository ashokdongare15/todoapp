(function () {
    'use strict';

    angular
        .module('todo.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = [];

    function DashboardController() {

        var dc = this;

        dc.sayHi = sayHi;

        function sayHi() {
            console.log('heyyy');
            return 'Hii, Welcome to todo app!!';
        }
    }
}());