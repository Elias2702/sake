import cors from "cors";
import express from "express";
import path from "path";

let app = express(),
    server = require("http").Server(app), // eslint-disable-line new-cap
    io = require("socket.io")(server),
    index = 0;

const {APP_PORT} = process.env;

app.use(cors());

app.use(express.static(path.resolve(__dirname, "../../bin/client")));

app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});

server.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

io.on("connection", socket => {
    socket.on("connectionAttempt", () => {
        index = index + 1;
        console.log("New player");
        socket.emit("connectionSuccessful", {
            welcome: `Hello, you are player number ${index}`,
            playerNumber: index,
        });
    });
    socket.on("Message", data => {
        io.emit("Message", {message: data.message});
        index++;
    });
    socket.on("Disconnect", () => {
        console.log("Disconnected");
        return;
    });
    socket.join("test room");
});
