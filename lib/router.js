/* Routing configuration */

Router.configure({
    layoutTemplate: 'layout', /* Default template */
    loadingTemplate: 'loading', /* Loading Template */
    waitOn: function() {return Meteor.subscribe('posts');} /* What are we waiting for */
});


/* Routing links */
Router.map(function() {
    /* Main Page router */
    this.route('postsList', {path: '/'});
    /* Post Page router */
    this.route('postPage', {
        path: '/posts/:_id',
        data: function() { return Posts.findOne(this.param._id); }
    });
});



/* Routing events */
Router.onBeforeAction('loading');