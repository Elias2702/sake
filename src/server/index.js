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

server.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);

io.on("connection", socket => {
    socket.on("connectionAttempt", data => {
        console.log(`dataroom =${data.room}`);
        socket.join(data.room, () => {
            index = index + 1;
            console.log(`New player has joined: ${data.playername}`);
            socket.emit("connectionSuccessful", {
                welcome: `Hello ${
                    data.playername
                }, you are player number ${index}`,
                playerNumber: index,
                playerName: data.playername,
            });
            console.log(`socketrooms =${Object.keys(socket.rooms)}`);
        });
        socket.on("Message", datar => {
            io.to(data.room).emit("Message", {messages: datar.messages});
            index++;
        });
        socket.on("Disconnect", () => {
            console.log("Disconnected");
            return;
        });
    });
});
