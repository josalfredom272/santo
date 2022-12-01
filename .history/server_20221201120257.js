// Server.js
"use strict";
    var http = require("http");

    var Server = http.createServer(function (req, res) {
        res.writeHead(200, { "content-type": "text/plain"});
        res.end("Hola Mundo");
    });

    // para colocar el servidor en la red se envia el puerto
    Server.listen(8080);