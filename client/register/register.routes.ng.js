'use strict'

angular.module('eMediaApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('register', {
                url: '/register',
                templateUrl: 'client/register/register.view.ng.html',
                controller: 'RegisterCtrl',
                controllerAs: 'rc'
            });
    });