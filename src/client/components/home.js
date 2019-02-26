import * as React from "react";
import io from "socket.io-client";
import Chat from "./chat";
import ConnectionPanel from "./connection/connectionPanel";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            socket: "",
            playername: "",
            message: "",
            messages: [],
            isOnLine: false,
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
        let displayChat = "";

        if (this.state.isOnLine) {
            displayChat = <Chat />;
        }
        return (
            <div>
                <ConnectionPanel
                    initSocket={this.initSocket}
                    endSocket={this.endSocket}
                    assignPlayerName={this.assignPlayerName}
                    isOnLine={this.state.isOnLine}
                />
                {displayChat}
            </div>
        );
    }
}
