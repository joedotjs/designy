import {expect} from 'chai';

import {setFirst, setSecond, setThird, setColors} from '../../src/store/action-creators/color';

describe('Color actions', () => {

    describe('setFirst', () => {

        it('returns properly formatted action', () => {

            const testColor = [0, 255, 0];

            expect(setFirst(testColor)).to.be.deep.equal({
                type: 'SET_FIRST_COLOR',
                color: testColor
            });

        });

    });

    describe('setSecond', () => {

        it('returns properly formatted action', () => {

            const testColor = [0, 255, 0];

            expect(setSecond(testColor)).to.be.deep.equal({
                type: 'SET_SECOND_COLOR',
                color: testColor
            });

        });

    });

    describe('setThird', () => {

        it('returns properly formatted action', () => {

            const testColor = [0, 255, 0];

            expect(setThird(testColor)).to.be.deep.equal({
                type: 'SET_THIRD_COLOR',
                color: testColor
            });

        });

    });

    describe('setColors', () => {

        it('returns properly formatted action', () => {

            const testColors = [
                [0, 255, 0],
                [0, 255, 0],
                [0, 255, 0]
            ];

            expect(setColors(testColors)).to.be.deep.equal({
                type: 'SET_ALL_COLORS',
                colors: testColors
            });

        });

    });

});