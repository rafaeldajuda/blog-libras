const path = require('path');

module.exports = (app, rootPath) => {

    // HOME PAGE
    app.get('/', (req, res)=> {
        htmlPath =path.join(rootPath, '/index.html');

        res.sendFile(htmlPath);
    });

    // POSTS
    app.get('/posts', (req, res) => {
        htmlPath =path.join(rootPath, '/app/view/posts/posts.html');

        res.sendFile(htmlPath);
    });
}