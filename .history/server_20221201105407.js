// Server.js
"use strict";
    var http = require("http");

    var Server = http.createServer(function (req, res) {
        res.writeHead(200, { "content-type"})
    })