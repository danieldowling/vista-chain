import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from '../../../node_modules/redux';
import { testState, fetchBlocks } from './../store/actions'

class ButtonComponent extends React.Component{
    handleClick() {
        console.log('did this click?')
        this.props.testState('sup')
        this.getBlockList();
    }

    getBlockList() {
        axios.get('http://localhost:3001/blocks')
          .then(res => {
            const blocks = res.data;
            this.props.fetchBlocks(blocks)
        })
    }

    render() {
        return(
            <button onClick={() => this.handleClick()}>
              Get Blocks
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        test: state.title,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        testState: testState,
        fetchBlocks: fetchBlocks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonComponent)