import React from 'react'

function Conditional(props) {
    if (props.isLoading === true) {
        return (
            <h1>Loading...</h1>
        )
    } 
    return ( // implicit "else"
        <h1>Loaded!</h1>
    )
    
}

export default Conditional