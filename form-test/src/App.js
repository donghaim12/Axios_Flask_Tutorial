import React, { Component } from 'react';
import AxiosTest from './components/axiostest';

class App extends Component {

  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div>
        <AxiosTest
          onCreate={this.handleCreate} 
        />  
      </div>
    );
  }
}

export default App;