(function() {

    angular.module('posts', ['ui.router'])

    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

          // For any unmatched url, redirect to "/"
          $urlRouterProvider.otherwise('/');

          $stateProvider.state('list', {
            url: '/posts',
            templateUrl: 'modules/posts/views/posts.html',
            controller: ['$scope', '$http', function($scope, $http) {

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

            }],

            templateUrl: 'modules/app/views/posts'
          });


        })()