import React from 'react';

class Display extends React.Component {
    render() {
        const { number } = this.props; 
        return (
            <div>
                <h1>{number}</h1>
            </div>
            )
    }
}

export default Display;