(function() {

  angular.module('posts', ['ui.router'])

  .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    // For any unmatched url, redirect to "/"
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('posts', {
      url: '/posts',
      templateUrl: 'modules/posts/views/posts.html',
      controller: 'postsController',
      templateUrl: 'modules/posts/views/posts'
    });

  }]);

})()