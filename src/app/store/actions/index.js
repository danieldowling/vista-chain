export const testState = (item) => {
    return {
        type:'TEST_STATE',
        payload: item 
    }
}

export const fetchBlocks = (blocks) => {
    return {
        type:'FETCH_BLOCKS',
        payload: blocks
    }
}