import * as React from "react";
import io from "socket.io-client";

export default class Join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nbrPlayer: 1,
            newserverName: "newServer",
            serverName: "Server name",
            socket: "",
            playername: "",
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlePlayerName = this.handlePlayerName.bind(this);
        this.initSocket = this.initSocket.bind(this);
    }

    handleChange(data) {
        this.setState({
            [data.target.name]: data.target.value,
        });
    }

    handlePlayerName(event) {
        this.setState({playername: event.target.value});
    }

    async initSocket() {
        await this.setState({
            socket: io.connect("http://localhost:8082"),
        });
        this.state.socket.on("news", data => {
            console.log(data);
            this.state.socket.emit("my other event", {my: "data"});
        });
    }

    render() {
        return (
            <div className="join card">
                <h1>{"Jump in!"}</h1>
                <form>
                    <div>
                        <input
                            type="text"
                            name="playername"
                            placeholder="Your name here"
                            value={this.state.playername}
                            onChange={this.handlePlayerName}
                        />
                        <button onClick={this.initSocket}>{"Join"}</button>
                        <button onClick={this.disconnect}>
                            {"Disconnect"}
                        </button>
                    </div>
                    <div>
                        <label>{"Pick a game room :"}</label>
                        <select name="Rooms">
                            <option value="1">{"Kokuryu"}</option>
                            <option value="2">{"Otokoyama"}</option>
                            <option value="3">{"Juyondai"}</option>
                            <option value="4">{"Stefanyotounu"}</option>
                            <option value="5">{"Dewatsuru"}</option>
                        </select>
                    </div>
                    <div>
                        <p>
                            {
                                "Current number of players in [name of selected game room]:"
                            }
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}
