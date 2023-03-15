import React from "react";
import './elements.css';

export default class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { timer: 10};
    }
    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    tick() {
        console.log(this.state.timer);
    if (this.state.timer > 0)
    {
        var prev = this.state.timer;
        this.setState({
            timer: (prev - 1)
        });
    } else {
        clearInterval(this.timerID);
    }

    }
    render () {
        return (
            <p>Timer: {this.state.timer}</p>
        );
    }
}