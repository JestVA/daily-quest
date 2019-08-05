import React, {Component} from "react"

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            loading: false,
            character: {}
        }
    }
    
    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch("https://swapi.co/api/people/1")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    loading: false
                })
            })
    }
    
    render() {
        let text = this.state.loading ? 'Loading' : this.state.character.name
        return (
            <div>
                {text}
            </div>
        )
    }
}

export default App
