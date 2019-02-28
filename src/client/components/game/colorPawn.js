import * as React from "react";

export default class ColorPawn extends React.Component {
    render() {
        return (
            <div className="colorPawnContainer">
                <i
                    className="fa fa-angle-up"
                    aria-hidden="true"
                    onClick={() => this.props.colorUp(this.props.key)}
                />
                <div
                    className="colorContainer"
                    style={{
                        backgroundColor: this.props.colorList[
                            this.props.colorIndex
                        ],
                    }}
                />
                <i
                    className="fa fa-angle-down"
                    aria-hidden="true"
                    onClick={() => this.props.colorDown(this.props.key)}
                />
            </div>
        );
    }
}
