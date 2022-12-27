import React from 'react';

export class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome, {this.props.name}! 😃</p>
        <p> Your Age is: {this.props.age} 👍🏻</p>
        </div>
    );
  }
}

Welcome.defaultProps = {
  name: 'Bianca',
  age: 30,
}
