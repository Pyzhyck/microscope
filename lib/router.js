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

/*Router.map(function() {
    /!* Main Page router *!/
    this.route('postsList', {path: '/'});
    /!* Post Page router *!/
    this.route('postPage', {
        path: '/posts/:_id',
        data: function() { return Posts.findOne(this.params._id); }
    });
});*/

/* Routing events */
Router.onBeforeAction('loading');

Router.onBeforeAction('dataNotFound', {only: 'postPage'});