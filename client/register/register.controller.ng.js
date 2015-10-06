'use strict'

angular.module('eMediaApp')
    .controller('RegisterCtrl', function ($meteor, $state, $scope) {

        $scope.viewName = 'Register';
        var vm = this;
        vm.credentials = {
            username: '',
            password: ''
        };
        vm.error = '';
        vm.register = function () {
            $meteor.createUser(vm.credentials).then(
                function () {
                    $state.go('main');
                },
                function (err) {
                    vm.error = 'Registration error - ' + err;
                }
            );
        };
    });