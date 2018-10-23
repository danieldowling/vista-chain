import React from 'react';
import axios from 'axios';
import '../styles/mine-block.css';

class MineBlockComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        console.log('clicked');
        this.mineBlock();
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({
            data : event.target.value
        });
    }

    mineBlock() {
        axios.post('http://localhost:3001/mine', {
            data: this.state.data
          })
          .then(function (response) {
            console.log(response);
          })
    }
    
    render() {
        return (
        <form onSubmit={this.handleSubmit}>
        <div class="form-group">
            <label>
                <strong>Block Data:</strong>
            </label>
            <input class="form-control" type="text" placeholder="Enter block data" value={this.state.data} onChange={this.handleChange}/>
            <input class="btn btn-outline-secondary mine-block-btn" type="submit" value="Mine Blocks"/>
            </div>
        </form>
        )
    }
}

export default MineBlockComponent;