import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import AddButton from './AddButton';
import IncrementForm from './IncrementForm';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counterValue: 0,
      numbers: []
    }
  }

  createButton = (number) => {
    this.setState({ numbers: [...this.state.numbers, number] })
  }

  incrementCounter = (increment) => {
    this.setState({
      counterValue: this.state.counterValue + increment
    })
  }

  get buttons() {
    return this.state.numbers.map((number, i) => <AddButton key={i} handleClick={this.incrementCounter} number={number}/>)
  } 
  
  handleSubmit = (event) => {
    event.preventDefault();
    const increment = Number(event.target.increment.value);
    const newValue = this.state.counterValue + increment;
    this.setState({ counterValue: newValue });
  }

  render() {
    return (
      <div className="App">
        <div>{this.state.counterValue}</div>
        <IncrementForm handleSubmit={this.createButton} />
        {this.buttons}
      </div>
    );
  }
}

export default App;
