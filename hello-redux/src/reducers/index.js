export default (state, action) => {
    console.log(action)
    switch (action.type) {
        case 'SET_TECHNOLOGY':
            // do something
            return {
                ...state,
                tech: action.tech
            }
        default:
            return state

    }
}