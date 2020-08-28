import React, { Component } from 'react';
import {Store} from './components/Redux/Store';
import {Provider} from 'react-redux';
import Books from './components/Books';

class App extends Component {
  
  render() {
    return (
      <Provider store={Store}>
      <div>
        <Books/>
      </div>
      </Provider>
    );
  }
}

export default App;