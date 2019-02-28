import * as React from "react";

export default class ColorPawn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            colorIndex: 0,
        };
        this.colorUp = this.colorUp.bind(this);
        this.colorDown = this.colorDown.bind(this);
    }

    colorUp() {
        if (this.state.colorIndex === this.props.colorList.length - 1) {
            this.setState({
                colorIndex: 0,
            });
        } else {
            this.setState(state => ({
                colorIndex: state.colorIndex + 1,
            }));
        }
    }

    colorDown() {
        if (this.state.colorIndex === 0) {
            this.setState({
                colorIndex: this.props.colorList.length - 1,
            });
        } else {
            this.setState(state => ({
                colorIndex: state.colorIndex - 1,
            }));
        }
    }

    render() {
        return (
            <div className="colorPawnContainer">
                <i
                    className="fa fa-angle-up"
                    aria-hidden="true"
                    onClick={this.colorUp}
                />
                <div
                    className="colorContainer"
                    style={{
                        backgroundColor: this.props.colorList[
                            this.state.colorIndex
                        ],
                    }}
                />
                <i
                    className="fa fa-angle-down"
                    aria-hidden="true"
                    onClick={this.colorDown}
                />
            </div>
        );
    }
}
