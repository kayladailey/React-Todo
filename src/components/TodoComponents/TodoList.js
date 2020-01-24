import React from "react";
import Todo from "./Todo";



class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    search: ""
    };
  }



  render() {
    return (
      <>
        <ul>

          {this.props.todos.map(
            todo =>
            todo.task.includes(this.state.search) && (
         
         <Todo
                  todo={todo} 
                  toggleCompleted={this.props.toggleCompleted} 
                />
              )
          )}
        </ul>

      </>
    );
  }}

export default TodoList;