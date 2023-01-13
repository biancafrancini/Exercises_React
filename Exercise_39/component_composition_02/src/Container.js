import React from 'react';

export class Container extends React.Component{
    render() {
        return (
            <div className="container" style={{background: 'white', border: '3px solid red', width: '400px', padding: '5px'}}>
                <div className="container-title">
                    <h1>{this.props.title}</h1>
                    <hr />
                    {this.props.children}
                </div>
            </div>
        )
    }
}