(function() {
   'use strict';

    angular
        .module('todo')
        .component('languageSelector', {
            templateUrl:'/app/partials/languageSelector.html',
            controller: LanguageController,
            controllerAs: 'lc'
        });

    LanguageController.$inject = ['$translate'];

    function LanguageController($translate) {
        var lc = this;
        lc.changeLanguage =changeLanguage;

        function changeLanguage(langKey) {
            $translate.use(langKey);
        }
    }
})();