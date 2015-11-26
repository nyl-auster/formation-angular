(function() {


  /**
   * Déclaration du module "app"
   * C'est le module instancié par la directive ng-app dans le fichier 
   * index.html. C'est ce module qui instancie ensuite tous les autres modules.
   */
  var module = angular.module('app', ['tva', 'ui.router', 'posts']);

  /**
   * Provides routes / states
   */
  module.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

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
      templateUrl: 'modules/app/views/hello.html',
      controller: ['$scope', function($scope) {
        $scope.name = 'yann'
      }]
    });

  }]);

  /**
   * Une directive custom dans son plus simple apparat.
   * voir ici : http://www.sitepoint.com/practical-guide-angularjs-directives/
   */
  module.directive('helloSimple', [function() {
    return {
      // E comme "element" : attention, il faudra écrire "<hello-simple></hello-simple>" et 
      // pas <helloSimple> !
      restrict: 'E',
      // on remplacera completement notre balise "hello"
      // avec le contenu de "template" ou du fichier indiqué dans "templateUrl"
      replace: 'true',
      // on peut utiliser TemplateUrl à la place pour indiquer
      // un fichier html à charger
      template: '<h3>Hello World!</h3>'
    };

  }]);

  module.directive('helloColor', function() {
  return {
    // Element OR attribute : <hello-color></hello-color>
    // or <div hello-color></div> sont possibles.
    restrict: 'AE',
    replace: true,
    // on ajoute une variable {{color}}
    template: '<input type="text" ng-model="color" placeholder="Enter a color" /><p style="background-color:{{color}}">Hello World',

    // fonction de "compilation", les variables du template
    // sont résolus grâce à cette fonction. On "lie" des variables
    // au scope passé en argument pour les "résoudre".
    link: function(scope, elem, attrs) {
      elem.bind('click', function() {
        elem.css('background-color', 'white');
        scope.$apply(function() {
          scope.color = "white";
        });
      });
      elem.bind('mouseover', function() {
        elem.css('cursor', 'pointer');
      });
    }
  };
});

})();