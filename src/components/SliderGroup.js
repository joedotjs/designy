import React, {Component} from 'react';
import ColorSlider from './ColorSlider';

export default class extends Component {

    constructor() {
        super();
        this.state = {
            red: 0, green: 0, blue: 0
        };
        this.setColor = this.setColor.bind(this);
        this.tryColor = this.tryColor.bind(this);
    }

    setColor(color) {
        return (v) => {
            this.setState({
                [color]: v
            });
        };
    }

    tryColor() {
        this.props.submitColor([
            this.state.red,
            this.state.green,
            this.state.blue
        ]);
    }

    render() {
        const sc = this.setColor;
        return (
            <div className="slider-group">
                <ColorSlider onChange={sc('red')} />
                <ColorSlider onChange={sc('green')} />
                <ColorSlider onChange={sc('blue')} />
                <button onClick={this.tryColor}>Try out color</button>
            </div>
        );
    }

}