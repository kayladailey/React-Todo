import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: 'Study TK',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Meal Prep',
          id: 1528817084358,
          completed: false
        }
      ],
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  addTodo = e => {
    e.preventDefault();
    const newTodo = { task: this.state.todo,  };
    this.setState({ 
      todos: [...this.state.todos, newTodo], 
      todo: '' 
    });
  };

  changeTodo = e => this.setState({ [e.target.name]: e.target.value });


  render() {
    return (
      <div>
   <h1>Mommy Madness!</h1>
        <TodoForm
          value={this.state.todo}
          handleChange={this.changeTodo}
          handleAddTodo={this.addTodo}
         // handleClearTodos={this.clearCompletedTodos}
        />
       
      </div>
    );
  }
}

export default App;
