class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // change code below this line
// binding methods to the keyword this in the constructor function of our object
    this.increment=
    this.increment.bind(this)

    this.decrement=
    this.decrement.bind(this)

    this.reset=
    this.reset.bind(this)
    // change code above this line
  }
  // change code below this line

  // Write the functions...

increment() {
  this.setState({
    count: this.state.count + 1
  })
}

decrement() {
  this.setState({
    count: this.state.count - 1
  })
}

// Cannot link directly to constructor
// Have to find another way to implement "reset"
// yay! figured it out, passed the objects property count initialized with 0 as JS code for the setState function parameter :D 



reset() {
  this.setState({count: 0})
}
  // change code above this line
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};

// Add a render method to the component. Call it with the html ID of your div.  
// ReactDOM.render(<Counter />, document.querySelector('#mydiv'))