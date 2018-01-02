(function () {
    'use strict';

    angular.module('app')

            .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when('', 'aboutme');
        $urlRouterProvider.when('/', 'aboutme');
    
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('root', {
                    abstract: true,
                    url: '/',
                    data: {
                        title: 'Home',
                        breadcrumb: 'Home'
                    },
                    views: {
                        'header': {
                            templateUrl: 'core/navigation/headerView.html',
                            controller: 'HeaderController',
                            controllerAs: 'HC'
                        },
                        'menu': {
                            templateUrl: 'core/navigation/menuView.html',
                            controller: 'MenuController',
                            controllerAs: 'MC'
                        },
                        'breadcrumbs': {
                            templateUrl: 'core/navigation/breadcrumbsView.html',
                            controller: 'BreadcrumbsController',
                            controllerAs: 'BC'
                        },
                        'content': {
                            template: 'Choose option from menu...'
                        },
                        'footer': {
                            templateUrl: 'core/navigation/footerView.html',
                            controller: 'FooterController',
                            controllerAs: 'FC'
                        }
                    }
                })
                .state('root.todos', {
                    abstract: true,
                    url: 'todos',
                    data: {
                        title: 'Todos',
                        breadcrumb: 'Todos'
                    }
                })
                .state('root.todos.list', {
                    url: '/list',
                    data: {
                        title: 'To-do list',
                        breadcrumb: 'List'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/Galerie/listView.html',
                            controller: 'TodosListController',
                            controllerAs: 'TLC'
                        }
                    }
                })
               
                
                .state('root.todos.image', {
                    abstract: true,
                    url: '/:imageId',
                    data: {
                        title: '[image name]',
                        breadcrumb: '[image name]'
                    }
                })
                .state('root.todos.image.details', {
                    url: '/details',
                    data: {
                        title: ' details',
                        breadcrumb: 'Details'
                    },onEnter: ['ngDialog', function(ngDialog) {
                        ngDialog.open({templateUrl: 'core/Galerie/detailsView.html',
                        controller: 'GalerieDetailsController',
                        controllerAs: 'GDC'})}],
                  
                }) 
                .state('root.aboutme', {
                    url: 'aboutme',
                    data: {
                        title: 'aboutme',
                        breadcrumb: 'aboutme'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/About/about.html',
                            controller: 'aboutController',
                            controllerAs: 'AC'
                           
                        }
                    }
                })
                .state('root.form', {
                    url: 'form',
                    data: {
                        title: 'Form',
                        breadcrumb: 'Form'
                    },
                    views: {
                        'content@': {
                            templateUrl: 'core/form/formView.html',
                            controller: 'FormController',
                            controllerAs: 'FC'
                        }
                    }
                });
    }
})();
