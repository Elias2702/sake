import * as React from "react";
import io from "socket.io-client";

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            socket: "",
            message: "",
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
        this.state.socket.emit("connectionAttempt", () => {});
        this.state.socket.on("connectionSuccessful", data => {
            console.log(data.welcome);
        });
        this.state.socket.on("Message", data => {
            this.setState({
                message: data.message,
            });
        });
        this.state.socket.on("test Message", data => {
            console.log(data);
            this.setState({
                messages: data.message,
            });
        });
    }

    disconnect() {
        this.state.socket.emit("Disconnect", () => {
            console.log("Disconnected");
        });
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="message"
                        placeholder="Your message here"
                        value={this.state.message}
                        onChange={this.handleChange}
                    />
                    <button onClick={this.initSocket}>{"Join"}</button>
                </form>
                <hr />
                <small>{"becode/Mastermind"}</small>
                <hr />
                <p>{this.state.message}</p>
            </div>
        );
    }
}
