import * as React from "react";
import ColorPawn from "./colorPawn";

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.displayColorPawns = this.displayColorPawns.bind(this);
    }

    displayColorPawns = () => {
        let colorPawns = [];

        for (let i = 0; i < this.props.availableColor; i++) {
            colorPawns.push(<ColorPawn colorList={this.props.colorList} />);
        }

        return colorPawns;
    };

    render() {
        return (
            <div className="listColorPawnsContainer">
                {this.displayColorPawns()}
            </div>
        );
    }
}
