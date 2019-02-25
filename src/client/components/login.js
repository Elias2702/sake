import * as React from "react";
import io from "socket.io-client";
import "../scss/login.scss";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            socket: "",
            playername: "",
        };

        this.initSocket = this.initSocket.bind(this);
        this.disconnect = this.disconnect.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
            console.log("c'est bon je crois");
        });
        this.state.socket.on("Message", data => {
            this.setState({
                messages: data.messages,
            });
        });
    }

    disconnect() {
        this.state.socket.emit("Disconnect", () => {
            console.log("Disconnected");
        });
    }

    handleChange(data) {
        this.setState({
            [data.target.name]: data.target.value,
        });
    }

    render() {
        return (
            <div className="loginForm">
                <form>
                    <input
                        type="text"
                        name="playername"
                        placeholder="Pseudo"
                        onChange={this.handleChange}
                    />
                    <button onClick={this.initSocket}>{"Join"}</button>
                </form>
                <hr />
                <small>{"becode/Mastermind"}</small>
            </div>
        );
    }
}
