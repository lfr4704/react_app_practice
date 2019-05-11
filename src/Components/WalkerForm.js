import React from 'react';

// a component class can be defined by extending React.Component

class WalkerForm extends React.Component {
  constructor(props) {
    console.log('Constructor')
    super(props)
    //inside constructor is the only place where we can set state
    this.state = {
      counter: 0
    }
    this.increment = () => this.setState({counter: this.state.counter + 1})
    this.decrement = () => this.setState({counter: this.state.counter - 1})
  }

  // the only method that is required in a component sub-class is render
  render() {
    return(
      <div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <div className="counter">
          Counter: {this.state.counter}
        </div>
      </div>
    )
  }
}

export default WalkerForm
