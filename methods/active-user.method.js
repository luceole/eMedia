'use strict';

Meteor.methods({
    activeUser: function (demande) {
        var currentuser = Meteor.user();
        if (!currentuser)
            throw new Meteor.Error(401, 'Interdit');
        if (!Roles.userIsInRole(currentuser, ["admin", "manage-users"], 'default-group'))
            throw new Meteor.Error(401, "Vous n'avez pas le role d'adminsitrateur");
        var user = Meteor.users.findOne({
            _id: demande._id
        });
        if (!user)
            throw new Meteor.Error(401, 'demande non trouvée');
        console.log(user);
        Meteor.users.update(user._id, {
            $set: {
                isActif: true
            }
        });
        Roles.addUsersToRoles(user._id, ['member'], 'default-group'); // is member
        Roles.removeUsersFromRoles(user._id, ['invite'], 'default-group');
        return user;
    }
});
