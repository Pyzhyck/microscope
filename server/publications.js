/* Publish our data from database */

Meteor.publish('posts', function() {
    return Posts.find();
});