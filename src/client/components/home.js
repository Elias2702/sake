import * as React from "react";
import io from "socket.io-client";
import Chat from "./chat";
import Join from "./join";

export default class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            socket: "",
            playername: "",
            welcomeMessage: "Please enter your name and click Join",
            message: "",
            messages: [],
            isOnLine: false,
        };

        this.initSocket = this.initSocket.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
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
        });
        this.state.socket.on("connectionSuccessful", data => {
            this.setState({
                playernumber: data.playerNumber,
                welcomeMessage: `Hello ${
                    data.playerName
                }, you have joined! You can now send and recieve messages in the chat ;)`,
            });
            this.setState({isOnLine: true});
        });
        this.state.socket.on("Message", data => {
            this.setState({
                messages: data.messages,
            });
        });
    };

    render() {
        let chat = "";

        if (this.state.isOnLine) {
            chat = (
                <Chat
                    sendMessage={this.sendMessage}
                    playerName={this.state.playername}
                    messages={this.state.messages}
                    message={this.state.message}
                    handleMessage={this.handleMessage}
                />
            );
        }
        return (
            <div>
                <Join
                    initSocket={this.initSocket}
                    assignPlayerName={this.assignPlayerName}
                    welcomeMessage={this.state.welcomeMessage}
                />
                {chat}
            </div>
        );
    }
}
