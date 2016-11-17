import React, {Component} from 'react';
import SliderGroup from './SliderGroup';
import Palette from './Palette';

export default ({setColor, color}) => (
    <div className="palette-group">
        <SliderGroup submitColor={setColor}/>
        <Palette color={color}/>
    </div>
);