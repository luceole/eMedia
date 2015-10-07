'use strict'

angular.module('eMediaApp')
    .controller('DemandesListCtrl', function ($scope, $meteor) {
        $scope.page = 1
        $scope.perPage = 10
        $scope.orderProperty = "1"
        $scope.sort = {
            username: 1
        }
        $scope.demandes = $scope.$meteorCollection(function () {
            return Meteor.users.find({
                isActif: false
            }, {
                sort: $scope.getReactively('sort')
            });
        });

        $meteor.autorun($scope, function () {
            console.log($scope.sort)
            $scope.$meteorSubscribe('demandes', {
                limit: parseInt($scope.getReactively('perPage')),
                skip: parseInt(($scope.getReactively('page') - 1) * $scope.getReactively('perPage')),
                sort: $scope.getReactively('sort')
            }, $scope.getReactively('search')).then(function () {
                $scope.demandesCount = $scope.$meteorObject(Counts, 'numberOfDemandes', false);
            });
        });

        $meteor.session('demandesCounter').bind($scope, 'page');

        $scope.active = function (demande) {
            Meteor.call('activeUser', demande, function (error, result) {
                if (error) alert(error)
            });
        };

        $scope.remove = function (demande) {
            var r = confirm("Supprimer cette demande");
            if (r)
                $scope.demandes.remove(demande);
        };

        $scope.pageChanged = function (newPage) {
            $scope.page = newPage;
        };

        $scope.$watch('orderProperty', function () {
            if ($scope.orderProperty) {
                $scope.sort = {
                    username: parseInt($scope.orderProperty)
                };
            }
        });
    });
