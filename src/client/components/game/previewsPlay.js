import * as React from "react";
import Playresult from "../playresult";

export default class PreviewsPlay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const result = this.props.previewsPlay.map((play, index) => {
            let i = index;

            return (
                <Playresult
                    key={i}
                    answer={play}
                    colorList={this.props.colorList}
                />
            );
        });

        return <div className="previewsPlayContainer">{result}</div>;
    }
}
