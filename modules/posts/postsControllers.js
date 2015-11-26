(function() {

  angular.module('posts')

  .controller('postsController', ['$scope', '$http', function($scope, $http) {

    $scope.posts = [];

    // json Items
    $http.get('http://jsonplaceholder.typicode.com/posts').then(
      // success callback
      function(response) {
        $scope.posts = response.data;
        console.log(response);
      },
      // error callback
      function(response) {
        alert("Http request failed with status code " + response.status);
      }
    );


  }]);

})();