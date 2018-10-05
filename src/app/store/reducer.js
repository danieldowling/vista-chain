const initialState = {
    title: 'foo',
    blocks: []
}

const reducer = (state=initialState, action) => {
    console.log(action)
    switch(action.type) {
        case 'TEST_STATE': {
            return {
                ...state,
                title: action.payload
            }
        }
        case 'FETCH_BLOCKS': {
            return {
                ...state,
                blocks: action.payload
            }
        }
    }
    console.log(state)
    return state;
}

export default reducer;