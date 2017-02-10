/* Add data to MongoDB Collection Posts */

/* Check if database is empty */
if(Posts.find().count() === 0) {
    /* If empty add some data */
    Posts.insert(
        {
            title: 'Post about something 1',
            url: 'http://someurl.com/from/post1'
        }
    );
    Posts.insert(
        {
            title: 'Post about something 2',
            url: 'http://someurl.com/from/post2'
        }
    );
    Posts.insert(
        {
            title: 'Post about something 3',
            url: 'http://someurl.com/from/post3'
        }
    );
    Posts.insert(
        {
            title: 'Post about something 4',
            url: 'http://someurl.com/from/post4'
        }
    );
}