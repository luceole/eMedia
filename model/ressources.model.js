Ressources = new Mongo.Collection('ressources');


/*RessourceSchema = new SimpleSchema({
            name: {
                type: String,
                label: "Nom",
                max: 30
            }
            title: {
                type: String,
                label: "Titre",
                max: 200
            },
            lien: {
                type: String,
                label: "Lien"
            },
            lienOrigin: {
                type: String,
                label: "LienOrigine"
            },
             owner: {
                type: String,
                label: "proprietaire"
            },
             type: {
                type: String,
                label: "Type"
            },
             date_create: {
                type: date,
                label: "date creation"
            },
             tags: {
                type: String,
                label: "Tags"
            },
             public: {
                type: Boolean,
                label: "Public"
            }

        );*/


Ressources.allow({
    insert: function (userId, ressource) {
        if (Roles.userIsInRole(userId, ["admin", "manage-users"], 'default-group'))
            return true;
        else return false;
    },
    update: function (userId, ressource, fields, modifier) {
        if (!userId && (Roles.userIsInRole(userId, ["admin", "manage-users"], 'default-group') || ressources.owner === userId))
            return true;
        else return false;
    },
    remove: function (userId, ressource) {
        if (!userId && (Roles.userIsInRole(userId, ["admin", "manage-users"], 'default-group') || ressources.owner === userId))
            return true;
        else return false;
    }
})
