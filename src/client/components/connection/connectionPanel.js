import * as React from "react";
import Login from "./login";
import Logout from "./logout";

export default class ConnectionPanel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let displayConnectionPanel = "";

        if (this.props.isOnLine === false) {
            displayConnectionPanel = (
                <Login
                    initSocket={this.props.initSocket}
                    assignPlayerName={this.props.assignPlayerName}
                    handleRoom={this.props.handleRoom}
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
