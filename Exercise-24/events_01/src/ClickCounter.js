import React from 'react';

export class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handlerIncrementOnClick = () => {
    this.setState({
      count: this.state.count + 1,
    }); 
  }

  /* **************************************************************************** 
  Extra: Adding a button to reduce the counter. 
  If the count is going to be negative, the count will remain at 0.*/
  
  handlerReductionOnClick = () => {
    this.setState({
      count: this.state.count - 1,
    });
    
    if(this.state.count === 0){
      this.setState({
        count: 0,
      });
    }
  }
  /* **************************************************************************** */

  render(){
    return (
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.handlerIncrementOnClick}> ⇡  Increment counter ⇡ </button>
          <br />
          <br />
          <button onClick={this.handlerReductionOnClick}> ⇣  Reduce counter ⇣ </button>
        </div>
    )
  }

}