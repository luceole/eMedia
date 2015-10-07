'use strict'

angular.module('eMediaApp')
    .controller('MainCtrl', function ($scope, $rootScope, $meteor) {
        Meteor.subscribe("userData");
        $rootScope.isAdmin = Roles.userIsInRole($rootScope.currentUser, ["admin", "manage-users"], 'default-group');
        /*      accounts.ui.setLanguage('fr');

              Accounts.ui.config({
                  requestPermissions: {},
                  extraSignupFields: [{
                          fieldName: 'first_name',
                          fieldLabel: 'Prénom',
                          inputType: 'text',
                          visible: true,
                          validate: function (value, errorFunction) {
                              if (!value) {
                                  errorFunction("Merci de saisir votre prénom");
                                  return false;
                              } else {
                                  return true;
                              }
                          }
              }
          , {
                          fieldName: 'last_name',
                          fieldLabel: 'Nom',
                          inputType: 'text',
                          visible: true,
                          validate: function (value, errorFunction) {
                              if (!value) {
                                  errorFunction("Merci de saisir votre Nom");
                                  return false;
                              } else {
                                  return true;
                              }
                          },
                          saveToProfile: true
          }]
              });*/
    });
