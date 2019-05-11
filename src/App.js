import React from 'react';
import ReactDom from 'react-dom';
import WalkerForm from './Components/WalkerForm';

// a component class can be defined by extending React.Component
class App extends React.Component {
  // the only method that is required in a component sub-class is render
  render() {
    return(
      <div>
        <WalkerForm />
      </div>
    );
  }
}

export default App
