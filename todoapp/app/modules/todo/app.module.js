(function() {
    'use strict';

    angular.module('todo', [
        'ui.router',
        'ngSanitize',
        'ui.bootstrap',
        'pascalprecht.translate',
        'todo.dashboard',
        '720kb.datepicker'
    ]);

})();