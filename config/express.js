module.exports = function() {
    const express = require("express");
    const bodyParser = require("body-parser");
    const serveStatic = require("serve-static");

    let app = express();

    app.set("port", 8080);

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(require("method-override")());
    app.use(serveStatic("public/", {index: ["index.html"]}));

    return app;
}
