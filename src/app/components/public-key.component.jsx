import React from 'react';
import axios from 'axios';

class PublicKeyComponent extends React.Component{
    render() {
        return(
            <button class="btn btn-outline-secondary get-block-button" onClick={() => this.handleClick()}>
              Get Public Key
            </button>
        )
    }
}

export default PublicKeyComponent