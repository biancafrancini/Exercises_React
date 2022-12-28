import React from 'react';

export class Welcome extends React.Component {
  render() {
    return <p> Welcome, {this.props.name}! 😃</p>;
  }
}

Welcome.defaultProps = {
  name: 'You',
}
