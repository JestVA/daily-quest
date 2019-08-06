import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          id: 1,
          name: 'Matt',
          age: 32
        },
        {
          id: 2,
          name: 'James',
          age: 33
        },
        {
          id: 3,
          name: 'Iulian',
          age: 35
        }
      ],
      showModal: false,
      modalId: null
    };
  }

  showModalOn = (event) => {
    const { value } = event.target
    console.log(value)
    this.setState({ showModal: !this.state.showModal, modalId: +value - 1 })
  };
  showModalOff = () => this.setState({ showModal: !this.state.showModal })

  render() {
    const { people, showModal, modalId } = this.state
    
    return (
      <div>
        { showModal ? (
          <Modal closeModal={this.showModalOff} showModal={this.state.showModal}>
            <h1>This person age is: {people[modalId].age} and their name is {people[modalId].name}</h1>
          </Modal>
          ) : 
          people.map((person, index) => (
            <Card 
              key={person.name.length} 
              name={person.name} 
              showModalOn={this.showModalOn}
              index={person.id} // added this
            />
        ))}
      </div>
    );
  }
}


const Card = ({name, showModalOn, index}) => {
  return(
    <div>
      <h1>{name}</h1>
      <button value={index} onClick={showModalOn}>Open details</button>
    </div>
  );
}

const Modal = ({ children, closeModal, showModal }) => {
  return(
    <div>
      {showModal && 
        <div>
          <p>Inside modal</p>
          <p>{children}</p>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      }  
    </div>
  );
}

render(<App />, document.getElementById('root'));
