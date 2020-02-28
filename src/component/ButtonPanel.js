import Button from "./Button";
import React from "react";
import PropTypes from "prop-types";

import "./ButtonPanel.css";

export default class ButtonPanel extends React.Component {
    static propTypes = {
        clickHandler: PropTypes.func,
    };

    handleClick = buttonName => {
        this.props.clickHandler(buttonName);
    };

    render() {
        return (
            <div className="component-button-panel">

                <div>
                    <Button name="AC" clickHandler={this.handleClick}>AC</Button>
                    <Button name="(" clickHandler={this.handleClick}>(</Button>
                    <Button name=")" clickHandler={this.handleClick}>)</Button>
                    <Button name="oil" clickHandler={this.handleClick}>oil</Button>

                </div>
                <div>
                    <Button name="√" clickHandler={this.handleClick}>√<sup>2</sup></Button>
                    <Button name="pow" clickHandler={this.handleClick}>pow()</Button>
                    <Button name="backspace" clickHandler={this.handleClick}>←</Button>
                    <Button name="/" clickHandler={this.handleClick} orange>÷</Button>

                </div>
                <div>
                    <Button name="7" clickHandler={this.handleClick}>7</Button>
                    <Button name="8" clickHandler={this.handleClick}>8</Button>
                    <Button name="9" clickHandler={this.handleClick}>9</Button>
                    <Button name="*" clickHandler={this.handleClick} orange>*</Button>
                </div>
                <div>
                    <Button name="4" clickHandler={this.handleClick}>4</Button>
                    <Button name="5" clickHandler={this.handleClick}>5</Button>
                    <Button name="6" clickHandler={this.handleClick}>6</Button>
                    <Button name="-" clickHandler={this.handleClick} orange>-</Button>
                </div>
                <div>
                    <Button name="1" clickHandler={this.handleClick}>1</Button>
                    <Button name="2" clickHandler={this.handleClick}>2</Button>
                    <Button name="3" clickHandler={this.handleClick}>3</Button>
                    <Button name="+" clickHandler={this.handleClick} orange>+</Button>
                </div>
                <div>
                    <Button name="0" clickHandler={this.handleClick}>0</Button>
                    <Button name="." clickHandler={this.handleClick}>.</Button>
                    <Button name="," clickHandler={this.handleClick}>,</Button>

                    <Button name="=" clickHandler={this.handleClick} orange>=</Button>
                </div>
            </div>
        );
    }
}
