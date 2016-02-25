'use strict';

angular.module('confusionApp')
        .constant("baseURL","http://localhost:3000/")

        .service('menuFactory', ['$resource', 'baseURL', function($resource,baseURL) {    
                    this.getDishes = function(){
                                        return $resource(baseURL+"dishes/:id",null,  {'update':{method:'PUT' }});
                                    };

                        this.getPromotions = function(){
                                        return $resource(baseURL+"promotions/:id",null,  {'update':{method:'PUT' }});
                                    };   
                        
        }])

        .service('commitFactory', ['$http', 'baseURL', function($http,baseURL) {   
  
            this.getCommits = function ()
        { return $http.get(baseURL + 'commit')}
              
        }])

      .service('feedbackFactory', ['$resource', 'baseURL', function($resource,baseURL) {  
          
                    this.setFeedback = function(){
                                      return  $resource(baseURL+"feedback/:id",null,  {'save':{method:'GET' }});
                                    };  
                        
        }])

        .factory('corporateFactory', ['$resource', 'baseURL', function($resource,baseURL){
    
            var corpfac = {};
     
                corpfac.getLeaders = function(){
                                        return $resource(baseURL+"leadership/:id",null,  {'update':{method:'PUT' }})
                                    };
                return corpfac;
    
        }])
;
