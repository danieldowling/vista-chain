import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import ButtonComponent from './components/button.component';
import BlockListComponent from './components/block-list.component';

const store = createStore(reducer);

class App extends React.Component {
    render() {
        return (<div>
            <ButtonComponent />
            <BlockListComponent />
      </div>);
    }
};

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("app"));

