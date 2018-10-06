import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home.component';
import BlockContainer from './block-container.component';
import '../styles/navbar.css';

class NavBarComponent extends React.Component{
    render() {
        return (
        <div className="NavBar">
            <div className="menu">
                <ul>
                    <li> <Link to="/">Home</Link> </li>
                    <li> <Link to="/blocks">Blocks</Link> </li>
                    <li> <Link to="/mine-blocks">Mine Blocks</Link> </li>
                </ul>
            </div>
            <div className="App-intro">
          <Route exact path="/" component={Home}/>
          <Route path="/blocks" component={BlockContainer}/>
        </div>
        </div>
        )
    }
}

export default NavBarComponent;