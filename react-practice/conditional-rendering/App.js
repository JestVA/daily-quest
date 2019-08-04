import React, { Component } from 'react'
import Conditional from './Conditional'

class App extends Component {
    constructor() {
        super()
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(prevState => ({
                isLoading: !prevState.isLoading
            }))
        }, 1500)
    }

    render() {
        return (
            <div>
                <Conditional isLoading={this.state.isLoading} />
            </div>
        )
    }
}

export default App