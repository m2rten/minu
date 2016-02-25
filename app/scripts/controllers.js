'use strict';

angular.module('confusionApp')

        .controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {
            
            $scope.tab = 1;
            $scope.filtText = '';
            $scope.showDetails = false;
            $scope.showMenu = false;
            $scope.message = "Loading ...";
                        menuFactory.getDishes().query(
                function(response) {
                    $scope.dishes = response;
                    $scope.showMenu = true;
                },
                function(response) {
                    $scope.message = "Error: "+response.status + " " + response.statusText;
                });

                        
            $scope.select = function(setTab) {
                $scope.tab = setTab;
                
                if (setTab === 2) {
                    $scope.filtText = "appetizer";
                }
                else if (setTab === 3) {
                    $scope.filtText = "mains";
                }
                else if (setTab === 4) {
                    $scope.filtText = "dessert";
                }
                else {
                    $scope.filtText = "";
                }
            };

            $scope.isSelected = function (checkTab) {
                return ($scope.tab === checkTab);
            };
    
            $scope.toggleDetails = function() {
                $scope.showDetails = !$scope.showDetails;
            };
        }])

        .controller('ContactController', ['$scope', function($scope) {

            $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
            
            var channels = [{value:"tel", label:"Tel."}, {value:"Email",label:"Email"}];
            
            $scope.channels = channels;
            $scope.invalidChannelSelection = false;
                        
        }])

        .controller('FeedbackController',  ['$scope', 'feedbackFactory', function($scope, feedbackFactory) {
            
            $scope.sendFeedback = function() {
                
                console.log($scope.feedback);
                
                if ($scope.feedback.agree && ($scope.feedback.mychannel === "")) {
                    $scope.invalidChannelSelection = true;
                    console.log('incorrect');
                }
                else {
                    $scope.invalidChannelSelection = false;
                    feedbackFactory.setFeedback().save($scope.feedback);	
                    $scope.feedback = {mychannel:"", firstName:"", lastName:"", agree:false, email:"" };
                    $scope.feedback.mychannel="";
                    $scope.feedbackForm.$setPristine();
                    console.log($scope.feedback);
                   
                }
            };
        }])
.controller('TabsCtrl', ['$scope', function ($scope) {
    console.log("TabsCtrl")
    $scope.tabs = [{
            title: 'WebDev',
            url: 'one.tpl.html'
        }, {
            title: 'Postimees',
            url: 'two.tpl.html'
        }, {
            title: 'Stats',
            url: 'three.tpl.html'
        },
          {
            title: 'Regression',
            url: 'four.tpl.html'
        },          
                   {
            title: 'Benchmarking',
            url: 'five.tpl.html'
    },    
                   {
            title: 'Python',
            url: 'six.tpl.html'
    },
          {
            title: 'Other',
            url: 'seven.tpl.html'
        } ];

    $scope.currentTab = 'one.tpl.html';

    $scope.onClickTab = function (tab) {
        $scope.currentTab = tab.url;
    }
    
    $scope.isActiveTab = function(tabUrl) {
        return tabUrl == $scope.currentTab;
    }
}])

.controller('myctrl', ['$scope', function ($scope) {
    console.log("doing something")
    $scope.addPoints = function () {
        var seriesArray = $scope.highchartsNG.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray[rndIdx].data = seriesArray[rndIdx].data.concat([1, 10, 20])
    };

    $scope.addSeries = function () {
        var rnd = []
        for (var i = 0; i < 10; i++) {
            rnd.push(Math.floor(Math.random() * 20) + 1)
        }
        $scope.highchartsNG.series.push({
            data: rnd
        })
    }

    $scope.removeRandomSeries = function () {
        var seriesArray = $scope.highchartsNG.series
        var rndIdx = Math.floor(Math.random() * seriesArray.length);
        seriesArray.splice(rndIdx, 1)
    }

    $scope.options = {
        type: 'line'
    }

    $scope.swapChartType = function () {
        if (this.highchartsNG.options.chart.type === 'line') {
            this.highchartsNG.options.chart.type = 'bar'
        } else {
            this.highchartsNG.options.chart.type = 'line'
        }
    }

    $scope.highchartsNG = {
        options: {
            chart: {
                type: 'bar'
            }
        },
        series: [{
            data: [10, 15, 12, 8, 7]
        }],
        title: {
            text: 'Hello'
        },
        loading: false
    }
    console.log($scope.highchartsNG)
}])
.controller("myCtrl2", ['$scope', function($scope) {
   $scope.chartOptions =  {
    chart: { type: 'bar' },
    title: { text: 'Fruit Consumption' },
    xAxis: { categories: ['Apples', 'Bananas', 'Oranges'] },
    yAxis: { title: { text: 'Fruit eaten' } },
    series: [
      { name: 'Jane', data: [1, 0, 4] }, 
      { name: 'John', data: [5, 7, 3] }
    ]
  }
   console.log($scope.chartOptions)
   ;
}])
.controller("posti", ['$scope', function($scope) {
    function myepoc(sourcedate) {
                      console.log(new Date( sourcedate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3")))
                      //var rdate =  (new Date(sourcedate.replace(/(\d{2})\/(\d{2})\/(\d{4})/, "$2/$1/$3"))).getTime()
                      var numbers = sourcedate.match(/\d+/g);
                      console.log("numbers + " + (numbers[2]))
                      
                      var dateString = (numbers[1]) + "/" + (parseInt(numbers[0])) + "/" + (numbers[2])
                      console.log(dateString)
                      var rdate = (new Date(dateString));
                      console.log(rdate)
                      return rdate.getTime()+ 86400000
                    
                  }
   $scope.chartOptions = $.getJSON('http://localhost:3000/headingcount', function(data) {
 
            console.log(data);

            // Populate series
            var processed_json = new Array();
            var i  = 0;
            for (i = 0; i < data.length; i++) {
                processed_json.push([myepoc(data[i].date), parseInt(data[i].count)]);
            }
                console.log(processed_json)
			    $('#container').highcharts({
			        chart: {
			        	type: 'line'
			        },
            tooltip: {
                        formatter: function() {
                            return  '<b>' + this.series.name +'</b><br/>' +
                                Highcharts.dateFormat('%d - %m - %Y',
                                                      new Date(this.x))
                            + ' date, count:' + this.y;
                        }
                    },
                   
			chart : {
				renderTo : 'container'
			},
xAxis: {
                                type: 'date',
                                labels: {
                                    formatter: function () {
                                        return Highcharts.dateFormat('%d/%m/%Y', this.value);
                                    }
                                },
                                tickPixelInterval: 200
},
			        title: {
						text: 'Data fetches per day'
					},
                        series : [{
                            name : 'count',
                            data : processed_json
                        }]
			    });
			})
   console.log($scope.chartOptions)
   ;
}])
.directive("highcharts", function() {
  return {
    link: function(scope, el, attrs) {
    console.log("funktsiooni")
    console.log(attrs.highcharts)
    
      var options = scope.$eval(attrs.highcharts);
        console.log(options)
      options.chart.renderTo = el[0];
      new Highcharts.Chart(options);
    }
  };
})

.controller('CommitsCtrl', ['$scope', 'commitFactory', function ($scope, commitFactory) {
    $scope.commits ={};
    $scope.commits = commitFactory.getCommits().then(
    function(response)
       {
           $scope.commits =  response.data;
           console.log(response.data[0]);
           console.log("success");
      },
    function(response)
      {
          console.log("fail");
      }
      
      );
         
            }
          ])

