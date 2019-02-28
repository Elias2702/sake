import * as React from "react";
import io from "socket.io-client";
import Chat from "./chat/chat";
import ConnectionPanel from "./connection/connectionPanel";
import Gameboard from "./game/gameboard";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: "",
            playername: "",
            message: "",
            messages: [],
            isOnLine: false,
            room: "",
        };

        this.initSocket = this.initSocket.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handleRoom = this.handleRoom.bind(this);
    }

    sendMessage(e) {
        e.preventDefault();
        this.setState({
            index: this.state.index + 1,
        });
        const newMessage = {
            author: this.state.playername,
            content: this.state.message,
            id: this.state.index,
        };

        this.state.messages.push(newMessage);
        this.state.socket.emit("Message", {
            messages: this.state.messages,
        });
    }

    handleMessage(event) {
        this.setState({message: event.target.value});
    }

    initSocket = async playername => {
        this.setState({
            playername: playername,
        });
        await this.setState({
            socket: io(),
        });
        this.state.socket.emit("connectionAttempt", {
            playername: this.state.playername,
            room: this.state.room,
        });
        this.state.socket.on("connectionSuccessful", data => {
            this.setState({
                playernumber: data.playerNumber,
            });
            this.setState({isOnLine: true});
        });
        this.state.socket.on("Message", data => {
            this.setState({
                messages: data.messages,
            });
        });
    };

    // initSocket = async playername => {
    //     this.setState({
    //         playername: playername,
    //     });
    //     await this.setState({
    //         socket: io(),
    //     });
    //     this.state.socket.emit("connectionAttempt", {
    //         playername: this.state.playername,
    //         room: this.state.room,
    //     });
    //     this.state.socket.on("connectionSuccessful", data => {
    //         this.setState({
    //             playernumber: data.playerNumber,
    //         });
    //         this.setState({isOnLine: true});
    //     });
    //     this.state.socket.on("Message", data => {
    //         this.setState({
    //             messages: data.messages,
    //         });
    //     });
    // };

    handleRoom(event) {
        console.log("test");
        this.setState({
            room: event.target.value,
        });
    }

    render() {
        let displayChat = "",
            displayGame = "";

        if (this.state.isOnLine) {
            displayChat = (
                <Chat
                    sendMessage={this.sendMessage}
                    playerName={this.state.playername}
                    messages={this.state.messages}
                    message={this.state.message}
                    handleMessage={this.handleMessage}
                />
            );
            displayGame = <Gameboard />;
        }
        return (
            <div>
                <ConnectionPanel
                    handleRoom={this.handleRoom}
                    initSocket={this.initSocket}
                    endSocket={this.endSocket}
                    assignPlayerName={this.assignPlayerName}
                    isOnLine={this.state.isOnLine}
                />
                {displayChat}
                {displayGame}
            </div>
        );
    }
}
