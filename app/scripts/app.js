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
                    .state('app.todo', {
                url:'/todo.html',
                views: {
                    'content@': {
                        templateUrl : 'views/todo.html',
                        controller: 'TabsCtrl'
                    }
                },
            })
                        .state('app.postimees', {
                url:'/fetchcounts.html',
                views: {
                    'content@': {
                        templateUrl : 'views/fetchcounts.html'
                    }
                },
            })
                        .state('app.katsetused', {
                url:'/katsetused.html',
                views: {
                    'content@': {
                        templateUrl : 'views/katsetused.html'
                    }
                }
                        })
                        .state('app.web', {
                url:'/web.html',
                views: {
                    'content@': {
                        templateUrl : 'views/web.html',
                        controller: 'CommitsCtrl'
                    }
                },
            })
         
    
        $urlRouterProvider.otherwise('/');
    });
