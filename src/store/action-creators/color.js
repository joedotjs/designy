export const setFirst = color => {
    return {
        type: 'SET_FIRST_COLOR',
        color
    };
};

export const setSecond = color => {
    return {
        type: 'SET_SECOND_COLOR',
        color
    };
};

export const setThird = color => {
    return {
        type: 'SET_THIRD_COLOR',
        color
    };
};

export const setColors = colors => {
    return {
        type: 'SET_ALL_COLORS',
        colors
    };
};