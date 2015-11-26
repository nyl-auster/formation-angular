angular.module('tva')

// injection de dépendance explicite
.controller('tvaController', ['$scope', 'calculTVA', function($scope, calculTVA) {

  $scope.montant = 0;
  $scope.tva = 20;

  // instanciation de la "classe" calculMontant

  // on met à jour les variables de notre
  $scope.calculTVA = function() {
    calculTVA.montantHT = parseFloat($scope.montant);
    calculTVA.tva = parseFloat($scope.tva);
    return calculTVA;
  }

  $scope.montantRandom = function() {
    $scope.montant = Math.random() * 10000;
  };
  
}]);
