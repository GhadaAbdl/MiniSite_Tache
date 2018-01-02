(function () {
    'use strict';

    angular.module('app', [
        'ui.router',
        'app.index',
        'app.form',
        'app.galerie.details',
        'app.nav.breadcrumbs',
        'app.nav.footer',
        'app.nav.header',
        'app.nav.menu',
        'app.todos.list',
        'app.about',
        'app.directives.datepicker',
        'app.directives.about',
        'pascalprecht.translate',
        'ngCookies',
        'app.filters',
    
    ])
    .config(['$translateProvider', function ($translateProvider) {
   

        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '/assets/translations/{lang}/{part}.json'
          });

  
// Merci de changer fr-FR par en-AU  pour changer la langue du site 

        $translateProvider.preferredLanguage('fr-FR');
        $translateProvider.useCookieStorage();
      }]);
    
})();
