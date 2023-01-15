import React from "react";

export class TodoList extends React.Component {
  render() {
    return (
      <div>
        <div className="todo-list">{this.props.render()}</div>
      </div>
    );
  }
}
