/* Connecting to MongoDB */

Posts = new Mongo.Collection('posts');

Posts.allow({
    insert: function() {
        /* Allow if login */
        return !!userId;
    }
});