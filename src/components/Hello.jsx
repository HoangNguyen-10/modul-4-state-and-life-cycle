import React, { Component } from "react";

class Hello extends Component {
    componentWillUnmount() {
        alert('the component is going to be unmounted')
    }

    render() {
        return <h1>hello world</h1>
    }
}

export default Hello