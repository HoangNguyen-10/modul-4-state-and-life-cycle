import { Component } from "react";
import Home from "./Home";

class UserLoginLogout extends Component {
    constructor(props) {
        super(props)
        this.state = { isLogin: false }
    }

    handleLogin = () => {
        this.setState({ isLogin: true })
    }

    handleLogout = () => {
        this.setState({ isLogin: false })
    }
    render() {
        const { isLogin } = this.state
        if (isLogin) return (<Home onLogout={this.handleLogout} />)

        return (
            <div style={{ textAlign: 'center' }}>
                <h1>Please Log in</h1>
                <button onClick={this.handleLogin}>Log in</button>
            </div>
        )
    }
}
export default UserLoginLogout