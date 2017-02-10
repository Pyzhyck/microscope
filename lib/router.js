/* Routing configuration */

Router.configure({
    layoutTemplate: 'layout' /* Default template */
});


/* Routing links */
Router.map(function() {
    this.route('postsList', {path: '/'})
});