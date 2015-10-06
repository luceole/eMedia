'use strict'

angular.module('eMediaApp')
.controller('RessourcesListCtrl', function($scope, $meteor) {
  $scope.page = 1
  $scope.perPage = 3
  $scope.sort = {name_sort : 1};
  $scope.orderProperty = '1'
  
  $scope.ressources = $scope.$meteorCollection(function() {
    return Ressources.find({}, {sort:$scope.getReactively('sort')});
  });
  $meteor.autorun($scope, function() {
    $scope.$meteorSubscribe('ressources', {
      limit: parseInt($scope.getReactively('perPage')),
      skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
      sort: $scope.getReactively('sort')
    }, $scope.getReactively('search')).then(function() {
      $scope.ressourcesCount = $scope.$meteorObject(Counts, 'numberOfRessources', false);
    });
  });

  $meteor.session('ressourcesCounter').bind($scope, 'page');
    
  $scope.save = function() {
    if($scope.form.$valid) {
      $scope.ressources.save($scope.newRessource);
      $scope.newRessource = undefined;
    }
  };
      
  $scope.remove = function(ressource) {
    $scope.ressources.remove(ressource);
  };
    
  $scope.pageChanged = function(newPage) {
    $scope.page = newPage;
  };
    
  $scope.$watch('orderProperty', function() {
    if($scope.orderProperty) {
      $scope.sort = {name_sort: parseInt($scope.orderProperty)};
    }
  });
});
        