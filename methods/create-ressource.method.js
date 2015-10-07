'use strict';

Meteor.methods({
    createRessource: function (ressource) {
        var user = Meteor.user();
        if (!user)
            throw new Meteor.Error(401, 'You need to log in first');
        if (user.roles.indexOf("invite") > -1)
            throw new Meteor.Error(401, 'Le status invite ne permet de creer de ressource');
        var additionalParams = {
            createdAt: new Date(),
            owner: user._id,
            owner_name: Meteor.user().username,
            publish: (ressource.publish) ? true : false
        }
        _.extend(ressource, additionalParams);
        ressource._id = Ressources.insert(ressource);
        return ressource;
    }
});
