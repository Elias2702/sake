import * as React from "react";

export default class Playresult extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const answer = this.props.answer.map((color, index) => {
            let i = index;

            return (
                <div
                    key={i}
                    className="colorContainer"
                    style={{
                        backgroundColor: this.props.colorList[color],
                    }}
                />
            );
        });

        return <div className="result">{answer}</div>;
    }
}
