import React from "react";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";
import calculate from "../logic/calculate";
import "./App.css";

export default class App extends React.Component {

    componentDidMount() {
        document.addEventListener('keyup', (e) => {
            console.log(e);
        });
    }

    state = {
        total: null,
        next: '',
        operation: null,
        expression: '',
        operator: ''
    };

    handleClick = buttonName => {
        let res = calculate(this.state, buttonName);
        console.log(res);
        this.setState(res);
    };

    render() {
        return (
            <div className="component-app">
                <Display value={this.state.next || this.state.total || "0"}/>
                <ButtonPanel clickHandler={this.handleClick}/>
            </div>
        );
    }
}
