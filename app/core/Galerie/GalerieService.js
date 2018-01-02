(function () {
    'use strict';

    angular.module('app.galerieService', [])

            .factory('galerieService', galerieService);

            galerieService.$inject = ['$http', '$log', '$q'];


    function galerieService($http, $log, $q) {
        return {
            getImages: getImages ,
            getById:  getById ,
         
          
        };

        function getImages() {
            return $http({method:"GET", url:"assets/data/gallerie.json"})
                    .then(getImagesComplete)
                    .catch(getImagesFailed);

            function getImagesComplete(response) {
                return response.data;
            }

            function getImagesFailed(e) {
                var newMessage = 'XHR Failed for getImages.';
                $log.error(newMessage);
                return $q.reject(e);
            }
        }
        
        function  getById (id)
       {
            var result = null ;
          

        return $http({method:"GET", url:"assets/data/gallerie.json"}).then(function(response){
         
            angular.forEach(response.data, function (m) {
               
                if (m.id == id) {
                      result = m;

                  }
              })

            return result;
        });
        
    }

    
    
    }
})();
