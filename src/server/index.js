import cors from "cors";
import express from "express";
import path from "path";

let app = express(),
    server = require("http").Server(app), // eslint-disable-line new-cap
    io = require("socket.io")(server);

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
    socket.emit("news", {hello: "world"});
    socket.on("my other event", data => {
        console.log(data);
    });
    socket.on("test Message", data => {
        console.log(data);
    });
    socket.on("disconnect", () => {
        console.log("Disconnected");
    });
    socket.join("test room");
});
