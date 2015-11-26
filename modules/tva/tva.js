(function() {

  // déclaration du module
  var module = angular.module('tva', ['ui.router']);

  module.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

    $stateProvider.state('tva', {
      url: '/tva',
      templateUrl: 'modules/tva/views/tva.html',
      controller: 'tvaController'
    });

  }]);

})();