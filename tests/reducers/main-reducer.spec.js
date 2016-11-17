import {expect} from 'chai';

import {createStore} from 'redux';
import mainReducer from '../../src/store/reducers/main';

describe('Main reducer', () => {

    let testStore;
    beforeEach('Create testing store', () => {
        testStore = createStore(mainReducer);
    });

    it('has expected initial state', () => {
        expect(testStore.getState()).to.be.deep.equal({
            firstColor: [0, 0, 0],
            secondColor: [0, 0, 0],
            thirdColor: [0, 0, 0]
        });
    });

    describe('SET_FIRST_COLOR', () => {

        it('sets firstColor to action color', () => {
            testStore.dispatch({ type: 'SET_FIRST_COLOR', color: [0, 255, 0] });
            const newState = testStore.getState();
            expect(newState.firstColor).to.be.deep.equal([0, 255, 0]);
            expect(newState.secondColor).to.be.deep.equal([0, 0, 0]);
            expect(newState.thirdColor).to.be.deep.equal([0, 0, 0]);
        });

    });

    describe('SET_ALL_COLORS', () => {

        it('sets colors in order to action colors', () => {
            const newColors = [
                [255, 0, 0],
                [0, 255, 0],
                [0, 0, 255]
            ];
            testStore.dispatch({ type: 'SET_ALL_COLORS', colors: newColors });
            const newState = testStore.getState();
            expect(newState.firstColor).to.be.deep.equal([255, 0, 0]);
            expect(newState.secondColor).to.be.deep.equal([0, 255, 0]);
            expect(newState.thirdColor).to.be.deep.equal([0, 0, 255]);
        });

    });

});