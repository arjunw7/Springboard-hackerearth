var app = angular.module('springBoard',[]);
app.controller('mainController', ['$scope','$http',
  function($scope, $http){

    var getPaths = function(){
      $http.get("https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths")
      .then(function(response){ $scope.details = response.data; console.log($scope.details)});
    };
    getPaths();

    $scope.load = function() {
      angular.element(".listToggle").click(function(){
        angular.element(".menu").toggle();
      });
    }

    $scope.load();

}]);
