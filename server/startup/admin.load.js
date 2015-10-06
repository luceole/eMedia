console.log("load admin");
var user = Meteor.users.findOne({
    username: 'admin'
});
var id;
if (!user) {
    id = Accounts.createUser({
        username: 'admin',
        email: 'adm@admin.lan',
        password: 'admin21',
        profile: {
            first_name: 'Admin',
            last_name: 'Admin'
        }
    });
    Meteor.users.update({
        _id: id
    }, {
        $set: {
            isActif: true
        }
    });
    Roles.addUsersToRoles(id, ['admin'], Roles.GLOBAL_GROUP); // Admin is admin off all groups
    Roles.addUsersToRoles(id, ['member'], Roles.GLOBAL_GROUP); // is member off all groups
    Roles.removeUsersFromRoles(id, ['invite'], "default-group"); // is member off all groups
}

user = Meteor.users.findOne({
    username: 'test'
});
if (!user) {
    id = Accounts.createUser({
        username: 'test',
        email: 'test@admin.lan',
        password: 'test21',
        profile: {
            first_name: 'Alfred',
            last_name: 'TestMan'
        }
    });
    Roles.addUsersToRoles(id, ['member'], "default-group");
    Roles.removeUsersFromRoles(id, ['invite'], "default-group");
}