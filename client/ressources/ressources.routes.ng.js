'use strict'

angular.module('eMediaApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('ressources-list', {
                url: '/ressources',
                templateUrl: 'client/ressources/ressources-list.view.ng.html',
                controller: 'RessourcesListCtrl',
                resolve: {
                    currentUser: ['$meteor', function ($meteor) {
                        return $meteor.requireValidUser(function (user) {
                            if (Roles.userIsInRole(user, ['admin', 'member'], 'default-group'))
                                return true;
                            else
                                return 'UNAUTHORIZED';
                        });
                            }]
                }

            })
            .state('ressource-detail', {
                url: '/ressources/:ressourceId',
                templateUrl: 'client/ressources/ressource-detail.view.ng.html',
                controller: 'RessourceDetailCtrl',
                resolve: {
                    currentUser: ['$meteor', function ($meteor) {
                        return $meteor.requireValidUser(function (user) {
                            if (Roles.userIsInRole(user, ['admin', 'member'], 'default-group'))
                                return true;
                            else
                                return 'UNAUTHORIZED';
                        });

      }]
                }

            });
    });