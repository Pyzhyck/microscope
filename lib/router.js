/* Routing configuration */

Router.configure({
    layoutTemplate: 'layout', /* Default template */
    loadingTemplate: 'loading', /* Loading Template */
    waitOn: function() {return Meteor.subscribe('posts');} /* What are we waiting for */
});


/* Routing links */
Router.map(function() {
    this.route('postsList', {path: '/'})
});

/* Routing events */
Router.onBeforeAction('loading');