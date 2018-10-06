import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import NavBarComponent from './components/navbar.component';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (<div>
            <NavBarComponent />               
        </div>);
    }
};

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById("app"));

