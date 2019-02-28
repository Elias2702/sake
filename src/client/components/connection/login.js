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
            <div className="login">
                <h1>{"Jump in!"}</h1>
                <p>{"Please enter your name and click Join"}</p>
                <form>
                    <div>
                        <input
                            type="text"
                            name="playername"
                            placeholder="Your name here"
                            value={this.state.playername}
                            onChange={this.handlePlayerName}
                        />
                        <button onClick={this.handleJoin} className="primary">
                            {"Join"}
                        </button>
                    </div>
                    <div>
                        <label>{"Pick a game room :"}</label>
                        <select name="Rooms" onChange={this.props.handleRoom}>
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
