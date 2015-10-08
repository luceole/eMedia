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


    var demandes = [
        {
            'username': 'test1',
            email: 'test1@admin.lan',
            password: 'test21',
            profile: {
                first_name: 'Alfred',
                last_name: 'Test1'
            }
      },
        {
            'username': 'test2',
            email: 'test2@admin.lan',
            password: 'test21',
            profile: {
                first_name: 'Arthur',
                last_name: 'Test2'
            }
        },
        {
            'username': 'test3',
            email: 'test3@admin.lan',
            password: 'test21',
            profile: {
                first_name: 'William',
                last_name: 'Test3'
            }
        },
        {
            'username': 'test5',
            email: 'test5@admin.lan',
            password: 'test21',
            profile: {
                first_name: 'Bérénice',
                last_name: 'Test5'
            }
            },
        {
            'username': 'test4',
            email: 'test4@admin.lan',
            password: 'test21',
            profile: {
                first_name: 'Renée',
                last_name: 'Test4'
            }
            },
        {
            'username': 'test6',
            email: 'test6@admin.lan',
            password: 'test21',
            profile: {
                first_name: 'Igor',
                last_name: 'Test6'
            }
            }];
    demandes.forEach(function (demande) {
        Accounts.createUser(demande);
    });
}
