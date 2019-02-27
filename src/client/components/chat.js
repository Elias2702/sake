import * as React from "react";
import MessageItem from "./messageItem";

export default class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const messageItem = this.props.messages.map(message => {
            return (
                <MessageItem
                    key={message.id}
                    author={message.author}
                    content={message.content}
                />
            );
        });

        return (
            <div className="chat card">
                <h1>{"Talk to your fellow players ;-)"}</h1>
                <form>
                    <textarea
                        name="message"
                        placeholder="Your message here"
                        rows="5"
                        value={this.props.message}
                        onChange={this.props.handleMessage}
                    />
                    <button onClick={this.props.sendMessage}>
                        {"Send Message"}
                    </button>
                </form>
                <hr />
                <div>{messageItem}</div>
            </div>
        );
    }
}
