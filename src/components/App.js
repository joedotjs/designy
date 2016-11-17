import React, {Component} from 'react';
import PaletteGroup from './PaletteGroup';
import store from '../store';
import {setFirst, setSecond, setThird, setColors} from '../store/action-creators/color';

export default class extends Component {

    constructor() {
        super();
        this.state = {
            firstColor: [0, 0, 0],
            secondColor: [0, 0, 0],
            thirdColor: [0, 0, 0]
        };
        this.savePalette = this.savePalette.bind(this);
        this.setFirstColor = this.setFirstColor.bind(this);
        this.setSecondColor = this.setSecondColor.bind(this);
        this.setThirdColor = this.setThirdColor.bind(this);
    }

    componentDidMount() {

        store.subscribe(() => {
            this.setState(store.getState());
        });

        if (location.search !== '') {
            const colors = location.search
                .split('?')[1]
                .split('&')
                .map(s => s.split('=')[1])
                .map(s => s.split(',').map(c => +c));
            store.dispatch(setColors(colors));
        }

    }

    setFirstColor(color) {
        store.dispatch(setFirst(color));
    }

    setSecondColor(color) {
        store.dispatch(setSecond(color));
    }

    setThirdColor(color) {
        store.dispatch(setThird(color));
    }

    savePalette() {
        location.replace(`${location.origin}/?first=${this.state.firstColor}&second=${this.state.secondColor}&third=${this.state.thirdColor}`);
    }

    render() {
        return (
            <div>
                <h1>Desig.ny</h1>
                <div className="clearfix">
                    <PaletteGroup setColor={this.setFirstColor} color={this.state.firstColor} />
                    <PaletteGroup setColor={this.setSecondColor} color={this.state.secondColor} />
                    <PaletteGroup setColor={this.setThirdColor} color={this.state.thirdColor} />
                </div>
                <button id="save-button" onClick={this.savePalette}>Save Colors</button>
            </div>
        );
    }

}