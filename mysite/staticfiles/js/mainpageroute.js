var app = angular.module("indexapp",["ngRoute"])
                  .config(function($routeProvider){
                  	$routeProvider
                  	   .when("/",{
                  	   	     templateUrl:"/static/homepage.html",
                  	   	     controller:"homecontroller"
                                      alert("bdfhfd");
                  	   })
                  	   .when("/single",{
                  	   	     templateUrl:"Templates/single.html",
                  	   	     controller:"singleController"
                  	   })
                  	   
                  })
                  .controller("homecontroller",function($scope,$http){
                    $http.get("127.0.0.1:8000/getbikes")
                          .then(function  (response) {
                          	$scope.bikes = response.data;
                                console.log("console");
                          })

                  })
                  .controller("singleController",function($scope){
                  	 
                  });
