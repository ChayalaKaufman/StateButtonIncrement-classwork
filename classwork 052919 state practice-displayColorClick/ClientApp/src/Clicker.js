import React from 'react';

class Clicker extends React.Component {
    incrementNum = () => {
        const { number } = this.props;
        //console.log('yay');
        this.props.onNumberIncrement(number);
    } 
    render() {
        return (
            <div>
                <button onClick={this.incrementNum} className="btn btn-info">
                    Increment</button>
            </div>)
    }
}

export default Clicker;