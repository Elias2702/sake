import * as React from "react";
import ColorPawn from "./ColorPawn";

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <ColorPawn colorList={this.props.colorList} />;
    }
}
