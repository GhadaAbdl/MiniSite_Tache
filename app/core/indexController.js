(function () {
    'use strict';
  // ce controller contient l'affichage de la galerie
    angular.module('app.index', ['app.galerieService' , 'ngCookies', 'pascalprecht.translate'])

            .controller('IndexController', IndexController);
            

    IndexController.$inject = ['$log', 'galerieService' , '$scope',  '$translate', '$translatePartialLoader'];

    function IndexController($log, galerieService , $scope , $translate, $translatePartialLoader) {
        var vm = this;

        vm.todos = [];

        retrieve();

        function retrieve() {
            return getImages().then(function () {
                $log.info('Retrieved Todos');
            });
        }

        function getImages() {
            return galerieService.getImages()
                    .then(function (data) {
                        vm.todos = data;
                        return vm.todos;
                    });
        }
        $translatePartialLoader.addPart('translate');
        $translate.refresh();
        $scope.changeLanguage = function (key) {
            $translate.use(key);
          };
    }
})();
