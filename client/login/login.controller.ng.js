'use strict'

angular.module('eMediaApp')
    .controller('LoginCtrl', function ($meteor, $state, $scope) {


        $scope.viewName = 'Login';
        var vm = this;
        vm.credentials = {
            username: '',
            password: ''
        };
        vm.error = '';
        vm.login = function () {
            $meteor.loginWithPassword(vm.credentials.username, vm.credentials.password).then(
                function () {
                    $state.go('main');
                },
                function (err) {
                    vm.error = 'Login error - ' + err;
                }
            );
        };

        $scope.gooConnect = function () {

            $meteor.loginWithGoogle({
                requestPermissions: ['email']
            }).then(function () {
                console.log('Login success');
            }, function (err) {
                console.log('Login error - ', err);
            });
        }
    });
