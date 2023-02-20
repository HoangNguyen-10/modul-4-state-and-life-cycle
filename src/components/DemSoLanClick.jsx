import React from "react";

class CountFunction extends React.Component {
    constructor(props) {
        super(props)
        this.state = { value: 0 }
    }

    handleDecrease = () => {
        this.setState({ value: this.state.value - 1 })
    }

    handleIncrease = () => {
        this.setState({ value: this.state.value + 1 })
    }

    render() {
        return (
            <>
                <button onClick={this.handleDecrease} style={{ marginRight: '1rem' }}>Decrease</button>
                <span>{this.state.value}</span>
                <button onClick={this.handleIncrease} style={{ marginLeft: '1rem' }}>Increase</button>
            </>
        )
    }
}
export default CountFunction