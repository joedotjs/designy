import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';

import Palette from '../src/components/Palette';

describe('Palette component', () => {

    let palette;
    beforeEach('Create component', () => {
         palette = shallow(<Palette color={[255, 183, 205]} />);
    });

    it('should be a <div> with an expected background', () => {
        expect(palette.is('div')).to.be.equal(true);
        expect(palette.get(0).props.style.background).to.be.equal('rgb(255, 183, 205)');
    });

});