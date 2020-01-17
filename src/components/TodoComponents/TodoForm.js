import React from 'react';


const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.handleChange}
        type="text"
        name="todo"
        value={props.value}
        placeholder="Add Task"
      />
      <button onClick={props.handleAddTodo}>Add Task</button>
      <button onClick={props.handleClearTodos}>Remove Completed</button>
    </form>
  );
};

export default TodoForm;