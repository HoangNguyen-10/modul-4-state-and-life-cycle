import React, { Component } from "react";

class ChangeBackgroundColor extends Component {
    constructor(props) {
        super(props)
        this.state = { color: 'black' }
    }

    changeColor = () => {
        this.setState({ color: 'green' })
    }

    // componentDidMount() {
    //     setTimeout(() => {
    //         this.setState({ color: 'pink' })
    //     }, 5000);
    // }

    render() {
        return (
            <>
                <div style={{
                    backgroundColor: this.state.color,
                    paddingTop: 20,
                    width: 400,
                    height: 80,
                    margin: 'auto'

                }}></div>
                <button onClick={this.changeColor}>change color</button>
            </>
        )
    }
}
export default ChangeBackgroundColor