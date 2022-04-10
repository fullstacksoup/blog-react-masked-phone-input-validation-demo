import React, { Component } from 'react';
import ParentForm from './Components/ParentForm';
import './App.css';

class App extends Component {  
  render() {
    
    return (      
      <div className="App">
        <React.Fragment>       
          <ParentForm />                  
        </React.Fragment>       
      </div>
    );
  }
}

export default App;
