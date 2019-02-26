import * as React from "react";
import Login from "./login";
import Logout from "./logout";

export default class ConnectionPanel extends React.Component {
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
        let displayConnectionPanel = "";

        if (this.props.isOnLine === false) {
            displayConnectionPanel = (
                <Login
                    initSocket={this.props.initSocket}
                    assignPlayerName={this.props.assignPlayerName}
                />
            );
        } else {
            displayConnectionPanel = (
                <Logout endSocket={this.props.endSocket} />
            );
        }

        return <div className="join card">{displayConnectionPanel}</div>;
    }
}
