import React from 'react'
import Conditional from './Conditional'

class App extends Component {
    constructor() {
        super()
        this.state = {
            unreadMessages: ["yes", 'yes yes']
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.unreadMessages.length > 0 && // cool way to implement conditional rendering.. && will 'serve' the expression on the right, if the expression on the left evaluates true
                    <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
                }
            </div>
        )
    }
}

export default App