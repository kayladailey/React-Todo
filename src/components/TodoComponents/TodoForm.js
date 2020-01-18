
import React from "react";



class TodoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newTask: ""
    };
  }
 
  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      newTask: ""
    });

    this.props.handleSubmit(e, this.state.newTask);
  };


  render() {
   
    return (
      <>
        <form onSubmit={this.handleSubmit}>
         
          <input
            value={this.state.newTask}
            name="newTask"
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <button onClick = {this.props.clearCompleted}>Clear</button>
      </>
    );
  
  }}



export default TodoForm;