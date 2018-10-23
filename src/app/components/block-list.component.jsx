import React from 'react';
import { connect } from 'react-redux';
import '../styles/block-container.css';

class BlockListComponent extends React.Component{
    render() {
        return(
            <div class="container">
                <div class="row">
                    <div class="col-sm">
                        <ul>
                            { 
                            this.props.blocks.map(block => 
                          
                            <div class="card">
                                <li class="card-body">
                                    <p class="card-text"><strong>Block Hash:</strong> {block.hash}</p>
                                    <p class="card-text"><strong>Last Hash:</strong> {block.lastHash}</p>
                                    <p class="card-text"><strong>Timestamp:</strong> {block.timestamp}</p>
                                    <p class="card-text"><strong>Block Data:</strong> {block.data}</p>
                                </li>
                            </div>
                            )
                            }
                        </ul>
                    </div>
                </div>
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