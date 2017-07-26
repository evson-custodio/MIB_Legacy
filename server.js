const app = require("./config/express")();
const http = require("http");
const server = http.createServer(app);

server.listen(app.get("port"), function onRequest() {
    console.log("Server Running on localhost:" + app.get("port"));
});
