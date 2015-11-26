/**
 * Déclaration du module "app"
 * C'est le module instancié par la directive ng-app dans le fichier 
 * index.html. C'est ce module qui instancie ensuite tous les autres modules.
 */
angular.module('app', ['tva', 'ui.router', 'posts']);

angular.module('app').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

  // rediriger sur la page d'accueil si aucune route ne correspond à celle demandée
  $urlRouterProvider.otherwise('/');

  // Créer un state pour la page d'accueil
  $stateProvider.state('home', {
    url: '/',
    template: [function() {
      "Bienvenue sur la page d'accueil du site"
    }]
  });

  // Créer une page de test helloWorld
  $stateProvider.state('hello', {
    url: '/hello',
    template: function() {
      return "hello {{name}}";
    },
    controller: ['$scope', function($scope) {
      $scope.name = 'yann'
    }]
  });

}]);