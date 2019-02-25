import * as React from "react";
import ColorPicker from "./colorPicker";

export default class Gameboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorList: [
                "yellow",
                "blue",
                "red",
                "green",
                "white",
                "black",
                "purple",
                "pink",
            ],
        };
    }
    render() {
        return <ColorPicker colorList={this.state.colorList} />;
    }
}
