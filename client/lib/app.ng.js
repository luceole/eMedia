 T9n.setLanguage("fr");

 angular.module('eMediaApp', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'angularUtils.directives.dirPagination'
]);

 onReady = function () {
     angular.bootstrap(document, ['eMediaApp']);
     T9n.setLanguage("fr");
 };

 if (Meteor.isCordova) {
     angular.element(document).on('deviceready', onReady);
 } else {
     angular.element(document).ready(onReady);
 }