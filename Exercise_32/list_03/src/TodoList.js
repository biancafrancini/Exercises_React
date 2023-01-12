import React from "react";

export class TodoList extends React.Component {
  
  state = {
    items: [
      "Have breakfast",
      "Study",
      "Have lunch",
      "Do workouts",
      "Go to the doctor",
      "Order food for the whole week",
      "Have dinner",
    ],
  };

  getTheItem = () =>{
    const getItemList = this.state.items.map((statesItem, index) => <li key={index + statesItem}>{statesItem}</li>);
    return getItemList;
  }

  handleAddButton = () => { 
    const inputTag = document.querySelector("#newTodo");

      if(inputTag.value){
        this.state.items.push(inputTag.value);
    
        this.setState({
          items: this.state.items,
        })

    //console.log(this.state.items); 
   } 
  }


  render() {
    return (
      <div>
        <ul className="todo-list">
          {this.getTheItem()}
        </ul>
        <input
          id="newTodo"
          name="newTodo"
          type="input"
          placeholder="Add a new item... "/>
        <button type="submit" onClick={this.handleAddButton}>ADD</button>
      </div>
    );
  }
}
