import React from 'react';

export default ({onChange}) => {
    const callOnChangeWithValue = e => onChange(+e.target.value);
    return <input
        type="range"
        min="0"
        max="255"
        onChange={callOnChangeWithValue}
    />;
};
