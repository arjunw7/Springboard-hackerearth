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
    var votes = [
    { "courseId":1, "upvotes":23, "downvotes":8},
    { "courseId":2, "upvotes":32, "downvotes":2},
    { "courseId":3, "upvotes":19, "downvotes":16},
    { "courseId":4, "upvotes":53, "downvotes":25},
    { "courseId":5, "upvotes":80, "downvotes":10},
    { "courseId":6, "upvotes":11, "downvotes":13},
    { "courseId":7, "upvotes":24, "downvotes":20}
  ];
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
