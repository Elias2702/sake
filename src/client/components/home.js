import * as React from "react";
import io from "socket.io-client";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nbrPlayer: 1,
            userName: "Guest",
            socket: "",
        };
        this.handelChange = this.handelChange.bind(this);
        this.initSocket = this.initSocket.bind(this);
    }
    handelChange(data) {
        this.setState({
            [data.target.name]: data.target.value,
        });
    }

    async initSocket() {
        await this.setState({
            socket: io(),
        });
        this.state.socket.on("news", data => {
            console.log(data);
            this.state.socket.emit("my other event", {my: "data"});
        });
        this.state.socket.on("test Message", data => {
            console.log(data);
            this.setState({
                messages: data.message,
            });
        });
    }

    render() {
        return (
            <div className="homeContainer">
                <h1>{"Mastermind"}</h1>
                <form>
                    <button onClick={this.initSocket}>{"Join"}</button>
                    <input
                        type="text"
                        onChange={this.handelChange}
                        name="userName"
                    />
                    <input
                        type="number"
                        max="4"
                        min="1"
                        value={this.state.nbrPlayer}
                        onChange={this.handelChange}
                        name="nbrPlayer"
                    />
                </form>
            </div>
        );
    }
}
