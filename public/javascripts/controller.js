var app = angular.module('springBoard',[]);
app.controller('mainController', ['$scope','$http',
  function($scope, $http){

    var getPaths = function(){
      $http.get("https://hackerearth.0x10.info/api/learning-paths?type=json&query=list_paths")
      .then(function(response){ 
        $scope.details = response.data; 
        console.log($scope.details)});
    };
    getPaths();

    $scope.load = function() {
      angular.element(".listToggle").click(function(){
        angular.element(".menu").toggle();
      });
        var availableTags = [
        "design research", 
        "UI frameworks", 
        "wireframes", 
        "user centric approach", 
        "finance", 
        "accounting", 
        "opertions", 
        "strategy", 
        "material design", 
        "sensors", 
        "maps", 
        "location", 
        "service", 
        "studio", 
        "design solution", 
        "business plan",
        "failing fast", 
        "learning quick", 
        "startups", 
        "hackernews", 
        "ycombinator", 
        "processing", 
        "wrangling", 
        "visualizations", 
        "prediction", 
        "analysys", 
        "python", 
        "django", 
        "backend"
      ];

      angular.element( "#tags" ).autocomplete({
        source: availableTags
      });
    };

    $scope.addVote = function(cid, up, down){
      $scope.newVote = {courseId: cid, upvote: up, downvote: down};
      $http.post('api/vote', $scope.newVote).success(function(data){
        console.log(data);
      });
    };
    $scope.load();

}]);
