import * as React from "react";
import io from "socket.io-client";
import MessageItem from "./messageItem";

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: "",
            playername: "",
            message: "",
            messages: [],
        };

        this.initSocket = this.initSocket.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
        this.handlePlayerName = this.handlePlayerName.bind(this);
    }

    async initSocket(e) {
        e.preventDefault();
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
            <div className="chat card">
                <h1>{"Talk to your fellow players ;-)"}</h1>
                <form>
                    <textarea
                        name="message"
                        placeholder="Your message here"
                        rows="5"
                        value={this.state.message}
                        onChange={this.handleMessage}
                    />
                    <button onClick={this.sendMessage}>{"Send Message"}</button>
                </form>
                <hr />
                {messageItem}
            </div>
        );
    }
}
