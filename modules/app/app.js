/**
 * Déclaration du module "app"
 * C'est le module instancié par la directive ng-app dans le fichier 
 * index.html. C'est ce module qui instancie ensuite tous les autres modules.
 */
angular.module('app', ['tva', 'ui.router', 'posts']);

angular.module('app').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

  // Rediriger sur la page d'accueil la route demandée n'est pas trouvée
  $urlRouterProvider.otherwise('/');

  // Créer un state pour la page d'accueil
  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'modules/app/views/home.html'
  });

  // Créer une page de test qui dit "hello", uniquement avec des
  // fonctions anonymes
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