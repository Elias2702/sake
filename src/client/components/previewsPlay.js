import * as React from "react";

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="previewsPlayContainer">
                <div id="previewsPlay" />
            </div>
        );
    }
}
