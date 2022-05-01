const server = require('./app/server');
const routes = require('./app/routes');

const app = server();
routes(app, __dirname);

app.listen("3000", () => {
    console.log("up server ok");
});