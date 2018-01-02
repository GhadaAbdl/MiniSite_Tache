(function () {
    'use strict';

    angular.module('app.todos.list', ['ngAnimate' ,'ngDialog'] )

            .controller('TodosListController', TodosListController)
        ;

    TodosListController.$inject = ['$scope' , 'ngDialog'];

    function TodosListController($scope ,ngDialog ) {
      

    }
})();
