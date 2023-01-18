import React, { Component } from "react";
import { ThemeContext } from "./App";

// below is a react component. use the render function to then return inside the render to send the code to the app.
export default class Counter extends Component {
    //override constructor, the constructor always takes in the props, ervery time override class component constructor use super props, will ensure your props to work the best.
    constructor(props) {
        super(props)
        // now set the state
        this.state = {
            count: props.initialCount
        }
    }

    render() {
        return (
            <ThemeContext>
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={() => this.changeCount(1)}>+</button>
                    </div>
                )}
            </ThemeContext>
        )
    }

    changeCount(amount) {
        // this.setState({ count: this.state.count + amount }) this is the non function version of the code below
        this.setState(prevState => {
            return { count: prevState.count + amount }
        })

    }
}