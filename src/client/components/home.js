import * as React from "react";
import Chat from "./chat";
import Join from "./join";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Join />
                <Chat />
            </div>
        );
    }
}
