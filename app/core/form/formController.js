(function () {
    'use strict';

    angular.module('app.form', ['angular-growl','ngAnimate'])

            .controller('FormController', FormController);

    FormController.$inject = [ 'growl'];
 
	
    function FormController( growl) {
        var vm = this;
       
        var date = new Date();
        vm.contactForm = {date: date};
        vm.update = update;

        function update(contact) {
            vm.contactForm = angular.copy(contact);
            growl.success('Message Succès.',{title: 'Succès!'});
        }

        
    }
})();
