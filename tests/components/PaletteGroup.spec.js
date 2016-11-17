import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import PaletteGroup from '../../src/components/PaletteGroup';
import SliderGroup from '../../src/components/SliderGroup';
import Palette from '../../src/components/Palette';

describe('PaletteGroup component', () => {

    let group, setColor, color;
    beforeEach('Create component', () => {
        color = [0, 255, 0];
        setColor = () => {};
        group = shallow(<PaletteGroup setColor={setColor} color={color}/>);
    });

    it('uses <SliderGroup /> and <Palette />', () => {
        expect(group.find(Palette).length).to.be.equal(1);
        expect(group.find(SliderGroup).length).to.be.equal(1);
    });

    it('passes its own color prop to <Palette />', () => {
        const usedPalette = group.find(Palette).nodes[0];
        expect(usedPalette.props.color).to.be.equal(color);
    });

    it('passes its own setColor prop to <SliderGroup /> as submitColor', () => {
        const usedPalette = group.find(SliderGroup).nodes[0];
        expect(usedPalette.props.submitColor).to.be.equal(setColor);
    });

});