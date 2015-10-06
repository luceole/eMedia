'use strict'
//All ressources 
Meteor.publish('ressources', function (options, searchString) {
    var where = {
        'name': {
            '$regex': '.*' + (searchString || '') + '.*',
            '$options': 'i'
        }
    };

    Counts.publish(this, 'numberOfRessources', Ressources.find(where), {
        noReady: true
    });
    return Ressources.find(where, options);
});

// User Resources
Meteor.publish('mes-ressources', function (options, searchString) {
    var where = {
        'owner': this.userId,
        'name': {
            '$regex': '.*' + (searchString || '') + '.*',
            '$options': 'i'
        }
    };

    Counts.publish(this, 'numberOfRessources', Ressources.find(where), {
        noReady: true
    });
    return Ressources.find(where, options);
});
