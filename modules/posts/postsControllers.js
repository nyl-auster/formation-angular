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


  }])

  .controller('postsDetailController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {

    console.log($stateParams);
    $scope.post = {};

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