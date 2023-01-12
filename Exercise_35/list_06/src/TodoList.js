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
      ]};

    inputValueState = "";

 
    getItemList = () => {
      return this.state.items.map((statesItem, index) => <div key={statesItem}><li key={index + statesItem}>{statesItem}</li><button>Remove item</button></div>);
    }

    handleAddButton = () => { 
    const inputTag = document.querySelector("#newTodo");

    if(inputTag.value){
    this.state.items.push(inputTag.value);

    this.setState({
      items: this.state.items,
    })

    //to clear the input field once the new item has been added to the todo list
    inputTag.value = this.inputValueState; 

    //console.log(this.itemState); 
   } 
  }
  
  //to reset the whole todo list when the user click on the "Reset" button 
   resetList = () => {
    document.querySelector(".todo-list").innerHTML = "";
   }


  render() {
    return (
      <div>
        <ul className="todo-list">
        {this.getItemList()} 
        </ul>
        <input
          id="newTodo"
          name="newTodo"
          type="input"
          placeholder="Add a new item..."/>
        <button type="submit" onClick={this.handleAddButton}>ADD</button>
        <button type="reset" onClick={this.resetList}>Reset</button>
      </div>
    );
  }
}
