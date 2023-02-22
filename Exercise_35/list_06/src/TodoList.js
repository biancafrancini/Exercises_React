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

    inputValue: "",
  };

  getItemList = () => {
    return this.state.items.map((statesItem, index) => (
      <li key={index + statesItem}>
        {statesItem}
        <button type="button" onClick={this.handleRemoveItem}>
          Remove item
        </button>
      </li>
    ));
  };

  handleInput = (e) => {
    this.setState({
      ...this.state,
      inputValue: e.target.value,
    });
  };

  handleAddButton = () => {
    if (this.state.inputValue !== "") {
      this.setState({
        items: this.state.items.concat(this.state.inputValue),
        //to clear the input field once the new item has been added to the todo list
        inputValue: "",
      });
    }
  };

  //to reset the whole todo list when the user click on the "Reset" button
  resetList = () => {
    this.setState({
      items: [],
    });
  };

  //to remove an item from the todo list when the user click on the "Remove item" button
  handleRemoveItem = (i) => {
    const selectedIndex = this.state.items.findIndex((item) => item === i);

    const newList = [...this.state.items];
    newList.splice(selectedIndex, 1);

    this.setState({
      ...this.state,
      items: newList,
    });
  };

  render() {
    return (
      <div>
        <ul className="todo-list">{this.getItemList()}</ul>
        <input
          name="newTodo"
          type="input"
          value={this.state.inputValue}
          placeholder="Add a new item..."
          onInput={this.handleInput}
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
