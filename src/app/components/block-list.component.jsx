import React from 'react';
import { connect } from 'react-redux';

class BlockListComponent extends React.Component{
    render() {
        return(
            <div>
                {this.props.title}
                <ul>
                    { 
                        this.props.blocks.map(block => <li key={block.hash}>
                            <p>{block.timestamp}</p>
                            <p>{block.lastHash}</p>
                            <p>{block.data}</p>
                        </li>) 
                    }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        blocks: state.blocks
    }
}

export default connect(mapStateToProps)(BlockListComponent)