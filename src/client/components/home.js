import * as React from "react";
import Chat from "./chat";
import Join from "./join";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playername: "",
            playernumber: "",
            message: "",
            messages: [],
            socket: "",
            index: 0,
            welcomeMessage: "Please enter your name and click Join",
        };

        // this.initSocket = this.initSocket.bind(this);
        // this.sendMessage = this.sendMessage.bind(this);
        // this.disconnect = this.disconnect.bind(this);
        // this.handleMessage = this.handleMessage.bind(this);
        this.handlePlayerName = this.handlePlayerName.bind(this);
        // this.initSocket = this.initSocket.bind(this);
    }

    // Getting playername from component Join
    handlePlayerName(event) {
        this.setState({playername: event.target.value});
    }

    // Initiating socket connection (coming from component Join)
    // initSocket = async (e) => {
    //     e.preventDefault();
    //     await this.setState({
    //         socket: io(),
    //     });
    //     this.state.socket.emit("connectionAttempt", {
    //         playername: this.state.playername,
    //     });
    //     this.state.socket.on("connectionSuccessful", data => {
    //         this.setState({
    //             playernumber: data.playerNumber,
    //             welcomeMessage: `Hello ${
    //                 data.playerName
    //             }, you can now send and recieve messages`,
    //         });
    //         console.log(data.welcome);
    //     });
    //     this.state.socket.on("Message", data => {
    //         this.setState({
    //             messages: data.messages,
    //         });
    //     });
    // }

    render() {
        return (
            <div>
                <Join
                    initSocket={this.initSocket}
                    handlePlayerName={this.handlePlayerName}
                />
                <Chat />
            </div>
        );
    }
}
