import * as React from "react";
import io from "socket.io-client";
import MessageItem from "./messageItem";

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: "",
            message: "",
            playername: "",
            playernumber: "",
            welcomeMessage: "Please enter your name and click Join",
            index: 0,
            messages: [],
        };

        this.initSocket = this.initSocket.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handlePlayerName = this.handlePlayerName.bind(this);
    }

    async initSocket() {
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
                }, you can now send and recieve messages`,
            });
            console.log(data.welcome);
        });
        this.state.socket.on("Message", data => {
            this.setState({
                messages: data.messages,
            });
        });
    }

    sendMessage() {
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

    disconnect() {
        this.state.socket.emit("Disconnect", () => {
            console.log("Disconnected");
        });
    }

    handleMessage(event) {
        this.setState({message: event.target.value});
    }

    handlePlayerName(event) {
        this.setState({playername: event.target.value});
    }

    render() {
        const messageItem = this.state.messages.map(message => {
            return (
                <MessageItem
                    key={message.id}
                    author={message.author}
                    content={message.content}
                />
            );
        });

        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="playername"
                        placeholder="Your Name here"
                        value={this.state.playername}
                        onChange={this.handlePlayerName}
                    />
                </form>
                <button onClick={this.initSocket}>{"Join"}</button>
                <p>{`You are player number: ${this.state.playernumber}`}</p>
                <form>
                    <input
                        type="text"
                        name="message"
                        placeholder="Your message here"
                        value={this.state.message}
                        onChange={this.handleMessage}
                    />
                </form>
                <button onClick={this.sendMessage}>{"Send Message"}</button>
                <button onClick={this.disconnect}>{"Disconnect"}</button>
                <hr />
                <small>{"becode/Mastermind"}</small>
                <hr />
                <p>{this.state.welcomeMessage}</p>
                <hr />
                <div>{messageItem}</div>
            </div>
        );
    }
}
