import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './home.component';
import BlockContainer from './block-container.component';
import MineBlockContainer from './mine-block-container.component';
import '../styles/navbar.css'

class NavBarComponent extends React.Component{
    render() {
        return (
        <div class="container-fluid">
            <div class="navbar navbar-expand-lg navbar-light bg-light">
                <ul class="navbar-nav">
                <div class="row">
                <div class="d-inline-flex p-2">
                    <li class="nav-item"> <Link class="nav-link" to="/">Home</Link> </li>
                </div>
                <div class="d-inline-flex p-2">
                    <li class="nav-item"> <Link class="nav-link" to="/blocks">Get Blocks</Link> </li>
                </div>
                <div class="d-inline-flex p-2">
                    <li class="nav-item"> <Link class="nav-link" to="/mine-blocks">Mine Blocks</Link> </li>
                </div>
                </div>
                </ul>
            </div>
            <div className="App-intro">
          <Route exact path="/" component={Home}/>
          <Route path="/blocks" component={BlockContainer}/>
          <Route path="/mine-blocks" component={MineBlockContainer}/>
        </div>
        </div>
        
        )
    }
}

export default NavBarComponent;