/*angular.module('indexapp', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
var app = angular.module('indexapp',[]);


/*app.controller('emp', function($scope) {
    
        $scope.p ="knvkndsknknasfns";
         $scope.cl=function(){
           $scope.p="my name is khan";  
        };
        
    
});

/*app.factory('myService', function($http) {
  var myService = {
    async: function() {
      // $http returns a promise, which has a then function, which also returns a promise
      var promise = $http.get('http://127.0.0.1:8080/login/getbikes/').then(function (response) {
        // The then function here is an opportunity to modify the response
        console.log(response);
        // The return value gets picked up by the then in the controller.
        return response.records;
      });
      // Return the promise to the controller
      return promise;
    }
  };
  return myService;
});

app.controller('emp', function( myService,$scope) {
  // Call the async method and then do stuff with what is returned inside our own then function
  myService.async().then(function(d) {
    $scope.data = d;
  });
});*/


/*app.controller('emp', function($scope, $http) {
  $scope.detail = {
    show: false,
    source: null
  };
  $scope.store = {
    selected: null,
    products: null
  };

  $http.get('store-products.json').success(function(data) {
    $scope.store.products = data;
  });
  
    $scope.setSelection = function(product) {
      $scope.store.selected = product; 
      $scope.detail.show = !$scope.detail.show; 
     // $scope.detail.source = product.code + '.html'
    };
    
    
    $scope.today = function() {
    $scope.dt1 = new Date();
    $scope.dt = new Date();
  };
  $scope.today();

  $scope.clear = function() {
    $scope.dt = null;
    $scope.dt1 = null;
    
  };

  $scope.inlineOptions = {
    customClass: getDayClass,
    minDate: new Date(),
    showWeeks: true
  };

  $scope.dateOptions = {
   // dateDisabled: disabled,
    formatYear: 'yy',
    maxDate: new Date(2020, 5, 22),
    minDate: new Date(),
    startingDay: 1
  };

  
  $scope.toggleMin = function() {
    $scope.inlineOptions.minDate = $scope.inlineOptions.minDate ? null : new Date();
    $scope.dateOptions.minDate = $scope.inlineOptions.minDate;
  };

  $scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.open2 = function() {
    $scope.popup2.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
    $scope.dt1 = new Date(year, month, day);
  };

  $scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
  $scope.format = $scope.formats[0];
  $scope.altInputFormats = ['M!/d!/yyyy'];

  $scope.popup1 = {
    opened: false
  };

  $scope.popup2 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];

  function getDayClass(data) {
    var date = data.date,
      mode = data.mode;
    if (mode === 'day') {
      var dayToCheck = new Date(date).setHours(0,0,0,0);

      for (var i = 0; i < $scope.events.length; i++) {
        var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

        if (dayToCheck === currentDay) {
          return $scope.events[i].status;
        }
      }
    }

    return '';
  }
    
});






/*app.controller('emp',['$scope','productService',function($scope,productService){
       productService.getproducts(function(r){
         $scope.products = r.records;
         $scope.p="my name is khan";
         console.log("nnnn");
         
        });
      
      
    
    }]);*/


/*app.service('productService',['$http','$log',function($http,$log){
    this.getproducts = function(cb){
      $http({
          url:'file:///home/sandii/Documents/Munter/Theme/product.json',
          method:'GET'
        }).then(function(resp){
          //cb(resp.data);
         // $scope.products = resp.data;
          console.log("nsfjnjdsnf");
          $log.error("ERROR occured");
          
        },function(resp){
              $log.error("ERROR occured");
        });
        
    };
    }]);
app.directive('myInfoMsg',function(){
       return{
         templateUrl:'indexproduct.html'     
       };
       });

app.directive('singleDetails',function(){
       return{
         templateUrl:'file:///home/sandii/Documents/Munter/Theme/test2.html'     
       };
       });

