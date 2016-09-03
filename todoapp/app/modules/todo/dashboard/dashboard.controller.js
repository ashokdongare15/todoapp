(function () {
    'use strict';

    angular
        .module('todo.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = [];

    function DashboardController() {

        var dc = this;
        dc.testMsg="Welcome to angular world!!";
    }
}());