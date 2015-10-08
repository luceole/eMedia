'use strict';

angular.module('eMediaApp')
    .config(function ($urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/');
    }).run(['$rootScope', '$state', function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            switch (error) {
            case 'AUTH_REQUIRED':
                $state.go('login');
                break;
            case 'FORBIDDEN':
            case 'UNAUTHORIZED':
                $state.go('about');
                break;
            }
        });
}]);
