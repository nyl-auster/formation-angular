(function() {

  angular.module('posts')

  .controller('postsController', ['$scope', function($scope) {

    $scope.posts;

    // json Items
    $http({
      method: 'GET',
      url: 'http://jsonplaceholder.typicode.com/posts'
    }).then(function successCallback(response) {
      $scope.posts = response.data;
    }, function errorCallback(response) {
      alert("http request failed");
    });

  }]);

})();