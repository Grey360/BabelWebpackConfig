// My /node_modules/ packages
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");
const fs = require("fs");
// My /node_modules/ packages

// Our useful paths
const client = path.join(__dirname, "..", "public", "index.html");
// Our useful paths
console.log(client);
// Our static files & body parsers.
app.use(express.static(client));
app.use(bodyParser.json());
// Our static files & body parsers.

app.get("/", (request, response) => {
    console.log("Hello world!");
    response.sendFile(client, (err) => {
        if(err) console.error(err);
    });
});

app.post("/", (request, response) => {
    console.log("POST.");
    response.sendFile(client, (err) => {
        if(err) console.error(err);
    });
});

const PORT = 3005;
app.listen(PORT, (err) => {
    if(err) throw err;
    console.log("Express server listening on port " + PORT + ".");
});


