const express = require('express');

module.exports = () => {
    const app = express();

    // MIDDLEWARES
    app.use('/static', express.static('app/static'));
    
    return app;
}