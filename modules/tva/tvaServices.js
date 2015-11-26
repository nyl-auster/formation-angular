// as a factory
angular.module('tva').factory('calculTVA', [function() {

  var factory = {};

  factory.montantHT = 0;
  factory.tva = 0;

  factory.getMontantTVA = function() {
    return this.montantHT * this.tva * 0.01;
  };

  factory.getMontantTTC = function() {
    return this.montantHT + this.getMontantTVA();
  };

  return factory;

}]);

// store calculs in local storage
angular.module('tva').factory('calculStore', [function() {
  var storeName = "calculStore";
  return {
    save: function(item) {
      items = this.getAll() ? this.getAll() : [];
      items.push(item);
      localStorage.setItem(storeName, JSON.stringify(items));
    },
    getAll: function() {
      return JSON.parse(localStorage.getItem(storeName));
    },
    deleteAll: function() {
      localStorage.removeItem(storeName);
    }
  };

}]);

//  as a service !
angular.module('tva').service('calculTVAService', [function() {

  this.montantHT = 0
  this.tva = 0;

  this.getMontantTVA = function() {
    return this.montantHT * this.tva * 0.01;
  };

  this.getMontantTTC = function() {
    return this.montantHT + this.getMontantTVA();
  };

}]);