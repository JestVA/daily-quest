import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }
    }
    
    // This is where we can do API calls, and the way to save the data returned from the API call is to save it to state so that it persists in our application.
    componentDidMount() {
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data
                })
            })
    }
    
    render() {
        return (
            <div>
                {this.state.character.name}
            </div>
        )
    }
}

export default App
