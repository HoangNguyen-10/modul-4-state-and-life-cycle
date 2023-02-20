import { Component } from "react";

class ExpandCollapse extends Component {
    constructor(props) {
        super(props)
        this.state = { isShowing: false }
    }

    handleShowing = () => {
        this.setState({ isShowing: true })
    }

    handleClose = () => {
        this.setState({ isShowing: false })
    }

    render() {
        const { isShowing } = this.state
        if (isShowing) return (
            <div>
                <h1 style={{ color: 'white', backgroundColor: 'green', padding: '15px 0px' }}>Conditional Rendering</h1>
                <button onClick={this.handleClose}>Dong gioi thieu</button>
                <h2>Gioi thieu</h2>
                <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>

            </div>
        )
        return (
            <div>
                <h1 style={{ color: 'white', backgroundColor: 'green', padding: '15px 0px' }}>Conditional Rendering</h1>
                <button onClick={this.handleShowing}>Xem gioi thieu</button>
            </div>
        )
    }
}

export default ExpandCollapse