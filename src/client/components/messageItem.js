import * as React from "react";

export default class MessageItem extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <strong>
                        {this.props.author}
                        {":"}
                    </strong>{" "}
                    {this.props.content}
                </p>
            </div>
        );
    }
}
