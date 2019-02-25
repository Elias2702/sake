import * as React from "react";
import ColorPawn from "./colorPawn";

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ColorPawn colorList={this.props.colorList} />;
    }
}
