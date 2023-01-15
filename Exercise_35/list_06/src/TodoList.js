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
    inputValueState: "",
  };

  getItemList = () => {
    return this.state.items.map((statesItem, index) => (
      <li key={index + statesItem}>
        {statesItem}
        <button
          id={index}
          className={statesItem}
          type="button"
          onClick={this.handleRemoveItem}>
          Remove item
        </button>
      </li>
    ));
  };

  handleAddButton = () => {
    const inputTag = document.querySelector("#newTodo");

    if (inputTag.value) {
      this.state.items.push(inputTag.value);

      this.setState({
        items: this.state.items,
      });

      //to clear the input field once the new item has been added to the todo list
      inputTag.value = this.state.inputValueState;
    }
  };

  //to reset the whole todo list when the user click on the "Reset" button
  resetList = () => {
    document.querySelector(".todo-list").innerHTML = "";
  };

  //to remove an item from the todo list when the user click on the "Remove item" button
  handleRemoveItem = (e) => {
    const newList = this.state.items.filter(
      (item) =>
        this.state.items.indexOf(item) !== this.state.items.indexOf(`${e.target.className}`)
    );

    this.setState({
      items: newList,
    });
  };

  render() {
    return (
      <div>
        <ul className="todo-list">{this.getItemList()}</ul>
        <input
          id="newTodo"
          name="newTodo"
          type="input"
          placeholder="Add a new item..."
        />
        <button type="submit" onClick={this.handleAddButton}>
          ADD
        </button>
        <button type="reset" onClick={this.resetList}>
          Reset
        </button>
      </div>
    );
  }
}
