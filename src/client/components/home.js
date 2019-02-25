import * as React from "react";
import io from "socket.io-client";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nbrPlayer: 1,
            newserverName: "newServer",
            serverName: "Server name",
            socket: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.initSocket = this.initSocket.bind(this);
    }
    handleChange(data) {
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
    }

    render() {
        return (
            <div className="homeContainer">
                <h1>{"Mastermind"}</h1>
                <div>
                    <form>
                        <label>{"creation d'un nouveau serveur "}</label>
                        <input
                            type="text"
                            onChange={this.handleChange}
                            name="newServerName"
                            value={this.state.serverName}
                        />
                        <label>{"nombre de joueur"}</label>
                        <input
                            type="number"
                            max="4"
                            min="1"
                            value={this.state.nbrPlayer}
                            onChange={this.handleChange}
                            name="nbrPlayer"
                        />
                        <button onClick={this.initSocket}>{"Create"}</button>
                    </form>
                </div>
                <form>
                    <label>{"Join a server"}</label>
                    <input
                        type="text"
                        onChange={this.handelChange}
                        name="serverName"
                    />
                    <button onClick={this.initSocket}>{"Join"}</button>
                </form>
            </div>
        );
    }
}
