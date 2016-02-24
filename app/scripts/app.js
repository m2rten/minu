'use strict';

angular.module('confusionApp', ['ui.router','ngResource',])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/exampleFruit.html'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                },
            })
                    .state('todo', {
                url:'/todo.html',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/todo.html',
                        controller: 'TabsCtrl'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                },
            })
                        .state('postimees', {
                url:'/fetchcounts.html',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/fetchcounts.html'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',
                    }
                },
            })
    
        $urlRouterProvider.otherwise('/');
    });
