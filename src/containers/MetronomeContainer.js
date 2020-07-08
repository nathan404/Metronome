import React, {Component} from 'react';
// import Metronome from '../components/Metronome';

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
                HELLOworld
            </div>
        )
    }
}

export default MetronomeContainer;
