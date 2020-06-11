import React from 'react';
import './App.css';

class App extends React.Compnonent {
  constructor(props){
    super(props);

    this.state = {
      todos: [
        {
          name: "Todo Item 1",
          complete: false,
        },
        {
          name: "Todo Item 2",
          complete: false,
        },
        {
          name: "Todo Item 3",
          complete: false,
        },
      ]
    }
  }


  render() {
    return (
    <div className="App">
      <header className="App-header">
      
      </header>
    </div>
  );
}

export default App;
