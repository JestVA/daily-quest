import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            loading: false
        }
    }
    
    /**
     * We'll be using an API that provides a bunch of meme images.
     * 
     * Your task:
     * make an API call to "https://api.imgflip.com/get_memes" and save the 
     * data that comes back (`response.data.memes`) to a new state property
     * called `allMemeImgs`. (The data that comes back is an array)
     */
    componentDidMount() {
        this.setState({
            loading: true
        })
        fetch('https://api.imgflip.com/get_memes')
            .then(data => data.json())
            .then(response => {
                console.log(response.data.memes[0].url)
                const { memes } = response.data
                this.setState({
                    allMemeImgs: memes,
                    loading: false
                })
            } 
                
        )
        
        }
    
    render() {
        let text = this.state.loading ? '..loading' : 'Finished'
        
        return (
            <h1>{text}
            <img src={this.state.allMemeImgs[0] && this.state.allMemeImgs[0].url} /> 
            </h1>
        )
    }
}

export default MemeGenerator