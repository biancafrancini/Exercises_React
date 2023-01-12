import React from "react";

export class TodoList extends React.Component {
  
    itemState = [
        "Have breakfast",
        "Study ",
        "Have lunch",
        "Do workouts",
        "Go to the doctor",
        "Order food for the whole week",
        "Have dinner",
      ];

  getTheItem = () =>{
    const getItemList = this.itemState.map((statesItem, index) => <li key={index + statesItem}>{statesItem}</li>);
    return getItemList;
  }

  handleAddButton = () => { 
    const inputValue = document.querySelector("#newTodo").value;

    if(inputValue){
    const ulItemsList = document.querySelector(".todo-list")
    const newLi = document.createElement("li");
    const newItemTotheList = document.createTextNode(inputValue);
    newLi.appendChild(newItemTotheList);
    ulItemsList.appendChild(newLi);
    
    this.itemState.push(inputValue);

    console.log(this.itemState); 
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
