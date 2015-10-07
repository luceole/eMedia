'use strict'
T9n.setLanguage("fr");
angular.module('eMediaApp')
    .directive('toolbar', function () {
        return {
            restrict: 'AE',
            templateUrl: 'client/components/toolbar/toolbar.view.ng.html',
            replace: true,
            //controller: 'toolbarCtrl'
        };
    });
