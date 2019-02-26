import * as React from "react";
import ColorPawn from "./ColorPawn";

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);

        this.displayColorPawns = this.displayColorPawns.bind(this);
    }

    displayColorPawns = () => {
        let colorPawns = [];

        for (let i = 0; i < this.props.availableColor; i++) {
            colorPawns.push(
                <ColorPawn
                    colorIndex={this.props.colorIndex[i]}
                    colorDown={() => this.props.colorDown(i)}
                    colorUp={() => this.props.colorUp(i)}
                    key={i}
                    colorList={this.props.colorList}
                />,
            );
        }

        return colorPawns;
    };

    render() {
        return (
            <div className="listColorPawnsContainer">
                {this.displayColorPawns()}
                <button onClick={this.props.submitColors}>{Submit}</button>
            </div>
        );
    }
}
