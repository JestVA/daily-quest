import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { store } from './store'
import ButtonGroup from './ButtonGroup'

class App extends Component {
  render() {
    return [ // with React 16 you can use an array to return components without having to wrap the adjacent JSX into a div.
      <HelloWorld key={1} tech={store.getState().tech} />,
      <ButtonGroup key={2} technologies={["React", "Vue", "Angular"]} />
    ]
  }
}

export default App;
