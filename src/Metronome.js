import React, { Component } from 'react';

class Metronome extends Component {

    render() {

        let bpm = 120;
        let on = false;

        return (
            <div className="metronome">
                <div className="bpm-slider">
                    <div>{bpm}BPM</div>
                    <input
                    type="range"
                    min="40"
                    max="300"
                    value={bpm}
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