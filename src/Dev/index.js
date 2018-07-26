
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import allReducers from './Reducers/index.js';
import Enrollement from './Components/Enrollement';
import { Provider } from 'react-redux';
const store = createStore(allReducers);

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<Provider store={store}><Enrollement /></Provider>
        );
    }
}

export default App;