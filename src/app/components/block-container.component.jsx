import React from 'react';
import ButtonComponent from './button.component';
import BlockListComponent from './block-list.component';

class BlockContainer extends React.Component {
    render() {
        return (<div>
            <ButtonComponent />
            <BlockListComponent />
      </div>);
    }
};

export default BlockContainer;