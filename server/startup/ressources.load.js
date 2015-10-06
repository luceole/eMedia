Meteor.startup(function() {
  if(Ressources.find().count() === 0) {
    var ressources = [
      {
        'name': 'ressource 1'
      },
      {
        'name': 'ressource 2'
      }
    ];
    ressources.forEach(function(ressource) {
      Ressources.insert(ressource);
    });
  }
});