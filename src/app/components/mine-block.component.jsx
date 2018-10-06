import React from 'react';
import axios from 'axios';

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
            <label>
                Block Data:
            </label>
            <input type="text" value={this.state.data} onChange={this.handleChange}/>
            <input type="submit" value="Mine Blocks"/>
        </form>
        )
    }
}

export default MineBlockComponent;