import React, { Component } from 'react';
import sound from './sound.js';
import duckAccent from './duckAccent.js';
import duckBeat from './duckBeat.js';

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

        if(this.state.on){
            clearInterval(this.clock);
            this.clock = setInterval(this.playClick, (60 / bpm) * 1000);
            this.setState({
                count: 0,
                bpm
            });
        } else {
            this.setState({bpm});
        }
    }

    startStop = () => {
        if(this.state.on){
            clearInterval(this.clock);
            this.setState({
                on: false
            });
        } else {
            this.clock = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
            this.setState({
                count: 0,
                on: true},
                this.playClick);
        }
    }
    
    playClick = () => {
        const {count, beatsPerMeasure} = this.state;

        if(count % beatsPerMeasure === 0){
            duckAccent.play();
        } else {
            duckBeat.play();
        }
        this.setState(state => ({
            count: (state.count + 1) % state.beatsPerMeasure
        }));
    }

    render(){
        const {on, bpm} = this.state;

        return (
            <div className="metronome">
                <h1>Metronome City</h1>
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