(function(){
    'use strict';

    angular
        .module('todo')
        .filter('initcap', initcap);

    initcap.$inject = [];

    function initcap() {
        return  function(str) {
            return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
        }
    }
})();