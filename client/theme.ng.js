'use strict'

angular.module('eMediaApp')
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('lime')
  .accentPalette('lime');
})
