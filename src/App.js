import React from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props) {
    super(props);
    this.state = {
          todo: {
                  task: "test",
                   id:"123" ,
                   completed: false
                      },
}}
render() {
    return (
      <div>
        <h2>Mommy Madness!</h2>
        <TodoForm />
        <TodoList/>
      </div>
    );
  }
}

export default App;
