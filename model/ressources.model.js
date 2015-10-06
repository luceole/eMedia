Ressources = new Mongo.Collection('ressources');

Ressources.allow({
  insert: function(userId, ressource) {
    if (Roles.userIsInRole(userId, ["admin","manage-users"],'default-group')) 
    return  true; else return false;
  },
  update: function(userId, ressource, fields, modifier) {
if  (!userId && (Roles.userIsInRole(userId, ["admin","manage-users"],'default-group')|| ressources.owner === userId)) 
    return  true ;else return false;
  },
  remove: function(userId, ressource) {
if  (!userId && (Roles.userIsInRole(userId, ["admin","manage-users"],'default-group')|| ressources.owner === userId)) 
    return  true; else return false;
  }
})
