import React from 'react';
import { render } from 'react-dom';
import Clicker from './Clicker';
import Display from './Display';

class App extends React.Component {
    state = {
        number: 0
    }

    onNumberIncrement = number => {
        //debugger
        number++;
        this.setState({ number });
    }

    render() {
        return (
            <div>
                <Display number={this.state.number}/>
                <Clicker number={this.state.number} onNumberIncrement={this.onNumberIncrement}/>
            </div>
            )
    }

}

render(<App />, document.getElementById('root'));