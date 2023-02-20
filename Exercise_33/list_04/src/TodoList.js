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

  getTheItem = () => {
    return this.state.items.map((statesItem, index) => (
      <li key={index + statesItem}>{statesItem}</li>
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

  render() {
    return (
      <div>
        <ul className="todo-list">{this.getTheItem()}</ul>
        <input
          id="newTodo"
          name="newTodo"
          type="input"
          value={this.state.inputValue}
          placeholder="Add a new item..."
          onInput={this.handleInput}
        />
        <button type="submit" onClick={this.handleAddButton}>
          ADD
        </button>
      </div>
    );
  }
}
