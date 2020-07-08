import React, {Component} from 'react';
import Metronome from '../components/Metronome';

class MetronomeContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            on: false,
            bpm: 120
        }
    }
    render(){
        return(
            <div>
                <Metronome/>
            </div>
        )
    }
}

export default MetronomeContainer;
