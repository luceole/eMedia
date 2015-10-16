//T9n.setLanguage('fr');
Accounts.validateNewUser(function (user) {
    /*if (user.username && user.username.length >= 3)
        return true;
    throw new Meteor.Error(403, "L'utilisateur doit avoir au minimum 3 charactères ");*/
    return true
});

Accounts.onCreateUser(function (options, user) {

    // We still want the default hook's 'profile' behavior.
    console.log(user);
    if (!user.username) user.username = user.services.google.name;
    if (options.profile)
        user.profile = options.profile;
    user.isActif = false;
    return user;
});

Meteor.users.after.insert(function (userId, user) {
    Roles.addUsersToRoles(this._id, ['invite'], 'default-group')
});
