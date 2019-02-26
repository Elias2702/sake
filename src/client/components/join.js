import * as React from "react";

export default class Join extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            server: "",
            playername: "",
        };

        this.handlePlayerName = this.handlePlayerName.bind(this);
        this.handleJoin = this.handleJoin.bind(this);
    }

    handlePlayerName(event) {
        this.setState({playername: event.target.value});
    }

    handleJoin(event) {
        event.preventDefault();
        const playername = this.state.playername;

        this.props.initSocket(playername);
    }

    render() {
        return (
            <div className="join card">
                <h1>{"Jump in!"}</h1>
                <p>{this.props.welcomeMessage}</p>
                <form>
                    <div>
                        <input
                            type="text"
                            name="playername"
                            placeholder="Your name here"
                            value={this.state.playername}
                            onChange={this.handlePlayerName}
                        />
                        <button onClick={this.handleJoin}>{"Join"}</button>
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
