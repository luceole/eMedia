'use strict'

angular.module('eMediaApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('demandes', {
                url: '/demandes',
                templateUrl: 'client/demandes/demandes-list.view.ng.html',
                controller: 'DemandesListCtrl',
                resolve: {
                    currentUser: ['$meteor', function ($meteor) {
                        return $meteor.requireValidUser(function (user) {
                            return Roles.userIsInRole(user, ["admin", "manage-users"], 'default-group');
                        });
                                }]
                }
            });
    });
