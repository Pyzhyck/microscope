/* postsList template manager */

/* Imitation of some database in server */
/*
var postsData = [
    {
        title: 'Post about something 1',
        url: 'http://someurl.com/from/post1'
    },
    {
        title: 'Post about something 2',
        url: 'http://someurl.com/from/post2'
    },
    {
        title: 'Post about something 3',
        url: 'http://someurl.com/from/post3'
    }
];

Template.postsList.helpers({
    posts: postsData  /!* Send postdData to posts_list.html {{#each posts}} *!/
});*/
/* -------------------------------------------------------------------------------- */

/* Get data from collection Posts (MongoDB database) */

Template.postsList.helpers({
    posts: function() {
        return Posts.find();
    }
});