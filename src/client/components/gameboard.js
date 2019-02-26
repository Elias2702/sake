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
            colorIndex: [0, 0, 0, 0, 0, 0],
            previewsPlay: [],
        };

        this.colorUp = this.colorUp.bind(this);
        this.colorDown = this.colorDown.bind(this);
        this.submitColors = this.submitColors.bind(this);
    }

    colorUp(key) {
        let temp = this.state.colorIndex;

        if (this.state.colorIndex[key] === this.state.colorList.length - 1) {
            temp[key] = 0;
            this.setState({
                colorIndex: temp,
            });
        } else {
            temp[key] = temp[key] + 1;
            this.setState({
                colorIndex: temp,
            });
        }
    }

    colorDown(key) {
        let temp = this.state.colorIndex;

        if (this.state.colorIndex[key] === 0) {
            temp[key] = this.state.colorList.length - 1;
            this.setState({
                colorIndex: temp,
            });
        } else {
            temp[key] = temp[key] - 1;
            this.setState({
                colorIndex: temp,
            });
        }
    }

    submitColors(e) {
        e.preventDefault();
        let tempTable = [],
            temp = this.state.previewsPlay;

        this.state.colorIndex.forEach(value => {
            tempTable.push(value);
        });
        temp.push(tempTable);
        this.setState({
            previewsPlay: temp,
        });

        this.resetColors();
    }

    resetColors() {
        this.setState({
            colorIndex: [0, 0, 0, 0, 0, 0],
        });
    }

    render() {
        return (
            <ColorPicker
                colorIndex={this.state.colorIndex}
                colorDown={this.colorDown}
                colorUp={this.colorUp}
                colorList={this.state.colorList}
                availableColor={6}
                submitColors={this.submitColors}
            />
        );
    }
}
