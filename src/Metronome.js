import React, { Component } from 'react';
// import duckAccent from './DuckAccent.mp3';
// import duckBeat from './DuckBeat.mp3';
import sound from './sound.js';

class Metronome extends Component {

    constructor(props){
        super(props);
        this.state = {
            on: true,
            count: 0,
            bpm: 120,
            beatsPerMeasure: 4
        }

        // this.duckAccent = new Audio(duckAccent);
        // this.duckAccent = new Audio("./DuckAccent.mp3");
        // this.duckBeat = new Audio(duckBeat);

        //const accent = new UIfx({asset: duckAccent});
    }

    handleBpmChange = event => {
        const bpm = event.target.value;
        this.setState({bpm});
    }

    // sound = () => {
    //     const play = useSound(duckAccent);
    // }

    startStop = () => {
        // console.log(this.duckAccent);
        sound.play();
    }

    render() {
        const {on, bpm} = this.state;

        // const noise = new UIfx(
        //     {asset: duckAccent}
        // )

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
                <button onClick={this.startStop}>
                    {on ? 'Stop' : 'Start'}
                </button>
            </div>
        );
    }
}

export default Metronome;