angular.module('tva')

// injection de dépendance explicite
.controller('tvaController', ['$scope', 'calculTVA', '$http', function($scope, calculTVA, $http) {

  $scope.montant = 0;
  $scope.tva = 20;

  $scope.tvaIsZero = function() {
    if (0 === parseInt($scope.tva)) {
      return true;
    }
  };

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

  // fake Items
  $scope.items = [{
    title: "titre 1",
  }, {
    title: "titre 2",
  }, {
    title: "titre 3"
  }];

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