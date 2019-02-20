const express = require('express');
const socket = require('socket.io');

// App setup
const app = express();
const server = app.listen(4000, function() {
    console.log("J'écoute sur le port 4000, chou.")
});

// Static files
app.use(express.static("public"));

// Socket setup
const io = socket(server);
io.on("connection", function(socket){
    console.log("Une connection socket est établie");
})
