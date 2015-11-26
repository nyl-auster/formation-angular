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

  .controller('postsDetailController', ['$scope', '$resource', '$stateParams', '$http', function($scope, $resource, $stateParams, $http) {

    // resource est un wrapper autour de http
    var resource = $resource('http://jsonplaceholder.typicode.com/posts/:id', {id:'@id'});
    // son principal intéret est d'être plus simple d'écriture pour
    // par exemple sauvegarder un post sur le serveur distant, sans
    // avoir à s'occuper du type de méthode pour la requete http et de l'url.
    // Il faut néanmoins que les urls des webservices respectent des conventions
    // précises pour pouvoir utiliser les avantages de resource.
    resource.get({id:$stateParams.id}, function(post){
      $scope.post = post;
      //post.$save();
    });

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