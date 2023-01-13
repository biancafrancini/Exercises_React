import React from 'react';

export class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h3>Welcome {this.props.name}! 🥳</h3>
            </div>
        );
    }
}