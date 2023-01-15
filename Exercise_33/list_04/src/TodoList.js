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

  getTheItem = () => {
    return this.state.items.map((statesItem, index) => <li key={index + statesItem}>{statesItem}</li>);
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
          placeholder="Add a new item..."
        />
        <button type="submit" onClick={this.handleAddButton}>
          ADD
        </button>
      </div>
    );
  }
}
