const initialState = {
    firstColor: [0, 0, 0],
    secondColor: [0, 0, 0],
    thirdColor: [0, 0, 0]
};

export default (state = initialState, action) => {

    const newState = Object.assign({}, state);

    switch (action.type) {

        case 'SET_FIRST_COLOR':
            newState.firstColor = action.color;
            break;

        case 'SET_SECOND_COLOR':
            newState.secondColor = action.color;
            break;

        case 'SET_THIRD_COLOR':
            newState.thirdColor = action.color;
            break;

        case 'SET_ALL_COLORS':
            newState.firstColor = action.colors[0];
            newState.secondColor = action.colors[1];
            newState.thirdColor = action.colors[2];
            break;

        default:
            return state;
    }

    return newState;

};