'use strict'

angular.module('eMediaApp')
    .controller('DemandesListCtrl', function ($scope, $meteor) {
        $scope.page = 1
        $scope.perPage = 3
        $scope.sort = {
            name_sort: 1
        };
        $scope.orderProperty = '1'
        $scope.$meteorSubscribe('demandes');
        $scope.demandes = $scope.$meteorCollection(function () {
            return Meteor.users.find({}, {
                sort: $scope.getReactively('sort')
            });
        });

        $meteor.autorun($scope, function () {
            $scope.$meteorSubscribe('demandes', {
                limit: parseInt($scope.getReactively('perPage')),
                skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
                sort: $scope.getReactively('sort')
            }, $scope.getReactively('search')).then(function () {
                $scope.demandesCount = $scope.$meteorObject(Counts, 'numberOfDemandes', false);
            });
        });

        $meteor.session('demandesCounter').bind($scope, 'page');

        $scope.save = function () {
            if ($scope.form.$valid) {
                $scope.demandes.save($scope.newDemande);
                $scope.newDemande = undefined;
            }
        };

        $scope.remove = function (demande) {
            $scope.demandes.remove(demande);
        };

        $scope.pageChanged = function (newPage) {
            $scope.page = newPage;
        };

        $scope.$watch('orderProperty', function () {
            if ($scope.orderProperty) {
                $scope.sort = {
                    name_sort: parseInt($scope.orderProperty)
                };
            }
        });
    });