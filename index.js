const express = require('express');

// App setup
const app = express();
const server = app.listen(4000, function() {
    console.log("J'écoute sur le port 4000, chou.")
});

// Static files
app.use(express.static("public"));
