import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spy} from 'sinon';

import SliderGroup from '../src/components/SliderGroup';
import ColorSlider from '../src/components/ColorSlider';

describe('SliderGroup component', () => {

    let group, submitColorSpy;
    beforeEach('Create component', () => {
        submitColorSpy = spy();
        group = shallow(<SliderGroup submitColor={submitColorSpy} />);
    });

    it('uses three <ColorSlider />s', () => {
        expect(group.find(ColorSlider).length).to.be.equal(3);
    });

    it('has an initial local state of {red,blue,green = 0}', () => {
        expect(group.state()).to.be.deep.equal({
            red: 0,
            green: 0,
            blue: 0
        });
    });

    it('updates local state when <ColorSlider /> broadcasts change', () => {

        const [firstSl, secondSl, thirdSl] = group.find(ColorSlider).nodes.map(shallow);

        firstSl.simulate('change', { target: { value: 255 } });
        expect(group.state().red).to.be.equal(255);

        secondSl.simulate('change', { target: { value: 200 } });
        expect(group.state().green).to.be.equal(200);

        thirdSl.simulate('change', { target: { value: 100 } });
        expect(group.state().blue).to.be.equal(100);

    });

    it('invokes prop submitColor with array of color values when button clicked', () => {

        const tryColorButton = shallow(group.find('button').nodes[0]);

        tryColorButton.simulate('click');

        expect(submitColorSpy.calledWith([0, 0, 0])).to.be.true;

        group.setState({ red: 100, green: 40, blue: 200 });

        tryColorButton.simulate('click');

        expect(submitColorSpy.callCount).to.be.equal(2);
        expect(submitColorSpy.calledWith([100, 40, 200])).to.be.true;

    });

});