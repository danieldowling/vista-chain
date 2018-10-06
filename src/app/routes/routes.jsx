import React from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import BlockContainer from '../components/block-container.component';
import NavBarComponent from '../components/navbar.component';


export default (
    <Route exact path='/' component={NavBarComponent}>
    <Route path='/blocks' component={BlockContainer}></Route>
    </Route>
  )