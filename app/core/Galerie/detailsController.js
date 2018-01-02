(function () {
    'use strict';

    angular.module('app.galerie.details', ['ui.router', 'app.galerieService'])

            .controller('GalerieDetailsController', GalerieDetailsController);

            GalerieDetailsController.$inject = ['$stateParams', '$state', 'galerieService','$scope'] ;

    function GalerieDetailsController($stateParams, $state, galerieService ,$scope) {
        var vm = this;
      
        var x = null ;

        var myDataPromise = galerieService.getById($stateParams.imageId);
        myDataPromise.then(function(result) {  
    
           vm.dataImage = result;
     });

       
    }
})();
