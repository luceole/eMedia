Meteor.publish("userData", function () {
    if (this.userId) {
        return Meteor.users.find({
            _id: this.userId
        }, {
            fields: {
                'isActif': 1
            }
        });
    } else {
        this.ready();
    }
});
/*Meteor.publish("demands", function () {
    if (this.userId) {
        return Meteor.users.find({

        });
    } else {
        this.ready();
    }
});*/


Meteor.publish('demandes', function (options, searchString) {
    var where = {

        'username': {
            '$regex': '.*' + (searchString || '') + '.*',
            '$options': 'i'
        }
        // , 'isActif': false
    };
    Counts.publish(this, 'numberOfDemandes', Meteor.users.find(where), {
        noReady: true
    });
    return Meteor.users.find(where, options);
});