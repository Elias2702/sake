import * as React from "react";
import io from "socket.io-client";
import Chat from "./chat";
import Join from "./join";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: "",
            playername: "",
            welcomeMessage: "Please enter your name and click Join",
            message: "",
            messages: [],
            displayChat: false,
        };

        this.initSocket = this.initSocket.bind(this);
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
            this.setState({displayChat: true});
        });
        this.state.socket.on("Message", data => {
            this.setState({
                messages: data.messages,
            });
        });
    };

    render() {
        let chat = "";

        if (this.state.displayChat) {
            chat = <Chat />;
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
