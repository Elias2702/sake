import * as React from "react";
import ColorPicker from "./colorPicker";
import PreviewsPlay from "./PreviewsPlay";

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
            colorIndex: [0, 1, 2, 3, 4, 5],
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
            timestamp = Date.now(),
            temp = this.state.previewsPlay;

        this.state.colorIndex.forEach(value => {
            tempTable.push(value);
        });
        temp.push(tempTable);
        this.setState({
            previewsPlay: temp,
        });
        console.log(timestamp);
        this.state.socket.emit("Tentative", {
            tentative: this.tempTable,
            timestamp: timestamp,
        });

        this.resetColors();
    }

    resetColors() {
        this.setState({
            colorIndex: [0, 1, 2, 3, 4, 5],
        });
    }

    render() {
        return (
            <>
                <PreviewsPlay
                    previewsPlay={this.state.previewsPlay}
                    colorList={this.state.colorList}
                />
                <div className="card game">
                    <ColorPicker
                        colorIndex={this.state.colorIndex}
                        colorDown={this.colorDown}
                        colorUp={this.colorUp}
                        colorList={this.state.colorList}
                        availableColor={6}
                        submitColors={this.submitColors}
                    />
                </div>
            </>
        );
    }
}
