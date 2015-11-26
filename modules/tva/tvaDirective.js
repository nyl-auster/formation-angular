(function(){

  angular.module('tva', [])
  .directive( 'hello', function() {
    return {
      restrict: "E",
      scope:{
        name: '@'
      },
      templateUrl: 'templates/hello.html'
    }
  })

})