/* Routing configuration */

Router.configure({
    layoutTemplate: 'layout', /* Default template */
    loadingTemplate: 'loading', /* Loading Template */
    notFoundTempalte: 'notFound',
    waitOn: function() {return Meteor.subscribe('posts');} /* What are we waiting for */
});


/* Routing links */
Router.route('/', {
    name: 'postsList'
});

Router.route('/posts/:_id', {
    name: 'postPage',
    data: function() {
        return Posts.findOne(this.params._id);
    }
});

Router.route('/submit', {
    name: 'postSubmit'
});

/* Routers Hooks for acces to add post */
var requireLogin = function() {
    if(! Meteor.user()) {
        if(Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
            this.render('accessDenied');
        }
    } else {
        this.next();
    }
};

/* Routing events */
Router.onBeforeAction('loading');
Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});