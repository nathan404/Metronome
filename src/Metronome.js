import React, { Component } from 'react';

class Metronome extends Component {

    constructor(props){
        super(props);
        this.state = {
            on: false,
            count: 0,
            bpm: 120,
            beatsPerMeasure: 4
        }
    }

    handleBpmChange = event => {
        const bpm = event.target.value;
        this.setState({bpm});
    }

    render() {
        const {on, bpm} = this.state;

        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm}BPM</div>
                    <input
                    type="range"
                    min="40"
                    max="300"
                    value={bpm}
                    onChange={this.handleBpmChange}
                    />
                </div>
            <button>
                {on ? 'Stop' : 'Start'}
            </button>
            </div>
        );
    }
}

export default Metronome;