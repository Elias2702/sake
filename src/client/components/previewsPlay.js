import * as React from "react";
import Playresult from "./playresult";

export default class PreviewsPlay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const result = this.props.previewsPlay.map(play => {
            // eslint-disable-next-line react/jsx-key
            return (
                <Playresult
                    key={play.id}
                    answer={play}
                    colorList={this.props.colorList}
                />
            );
        });

        return <div className="previewsPlayContainer">{result}</div>;
    }
}
