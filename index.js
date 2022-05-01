const server = require('./app/server');
const routes = require('./app/routes');
const config = require('config');

const app = server();
routes(app, __dirname);

app.listen(process.env.PORT || config.get('port'), () => {
    console.log("up server ok");
});