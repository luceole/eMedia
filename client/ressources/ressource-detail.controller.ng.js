'use strict'

angular.module('eMediaApp')
.controller('RessourceDetailCtrl', function($scope, $stateParams, $meteor) {
  $scope.ressource = $scope.$meteorObject(Ressources, $stateParams.ressourceId);
  $scope.$meteorSubscribe('ressources');
  
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.ressource.save().then(
        function(numberOfDocs) {
          console.log('save successful, docs affected ', numberOfDocs);
        },
        function(error) {
          console.log('save error ', error);
        }
      )
    }
  };
        
  $scope.reset = function() {
    $scope.ressource.reset();
  };
});