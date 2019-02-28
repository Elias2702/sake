import * as React from "react";

export default class Join extends React.Component {
    handleDisconnect(event) {
        event.preventDefault();
        const playername = this.state.playername;

        this.props.endSocket(playername);
    }

    render() {
        return (
            <div className="logout">
                <div className="explanatory message">
                    <div className="icon check">
                        <i className="fas fa-check-square" />
                    </div>
                    <div className="explanatory text">
                        <p>
                            <strong>{`Hello ${
                                this.props.playername
                            }, you have joined!`}</strong>
                            <br />
                            {
                                "You can now send and receive messages in the chat ;)"
                            }
                        </p>
                    </div>
                </div>
                <button onClick={this.handleDisconnect} className="warning">
                    {"Disconnect"}
                </button>
            </div>
        );
    }
}
