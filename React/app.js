

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemCount: 0
    };
    // typing it this way makes a lot of sense
    this.addItem =
    this.addItem.bind(this)
    // binding "this" on a class method in the constructor
  }
  addItem() {
    this.setState({
      itemCount: this.state.itemCount + 1
    });
  }
  render() {
    return (
      <div>
        { /* change code below this line */ }
        <button onClick={this.addItem}>Click Me</button>
        { /* change code above this line */ }
        <h1>Finger trained: {this.state.itemCount}</h1>
      </div>
    );
  }
};

ReactDOM.render(<MyComponent />, document.querySelector('#MyComponent'))