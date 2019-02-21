/* becodeorg/bookshelf
 *
 * /src/client/components/hello.js - Hello Component
 *
 * coded by leny@BeCode
 * started at 18/01/2019
 */

import * as React from "react";
import io from "socket.io-client";

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            socket: "",
        };

        this.initSocket = this.initSocket.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.disconnect = this.disconnect.bind(this);
    }

    initSocket() {
        this.setState({
            socket: io.connect("http://192.168.99.100:8082"),
        });
        this.state.socket.on("news", data => {
            console.log(data);
            this.state.socket.emit("my other event", {my: "data"});
        });
    }

    sendMessage() {
        this.state.socket.emit("test Message", {
            message: "ceci est un message",
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.initSocket}>{"Join"}</button>
                <button onClick={this.sendMessage}>{"Send Message"}</button>
                <hr />
                <small>{"becode/Mastermind"}</small>
            </div>
        );
    }
}
