import React from 'react';

const formStyleObj = (r,g,b) => ({ background: `rgb(${r}, ${g}, ${b})` });

export default ({ color }) => (
    <div className="palette" style={formStyleObj(...color)}></div>
);