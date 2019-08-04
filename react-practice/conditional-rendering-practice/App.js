import React from "react"

/*
Challenge:

Given a stateless functional component:
1. Follow the steps necessary to add state to it,
    // class-based component
    // constructor method
2. Have state keep track of whether the user is logged in or not
    // isLoggedIn: Boolean (true or false)
3. Add a button that logs the user in/out
    // event listener (onClick)
    a. extra challenge - make the button display "log in" if they're not logged in and "log out" if they are
        // Conditional Rendering
4. Display text that says "Logged in" if the user is logged in, or "Logged out" if they're not.
    // Conditional Rendering
*/

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        
        this.handleLogin = this.handleLogin.bind(this)
    }
    handleLogin() {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn 
        })
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.handleLogin}>{this.state.isLoggedIn ? 'Log Out' : 'Log In'}</button>
                <h3>The user is {this.state.isLoggedIn ? 'logged in' : 'logged out'}</h3>
            </div>
        )
    }

}

export default App
