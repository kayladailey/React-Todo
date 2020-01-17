import  React , {Component} from 'react';


class TodoForm extends Component {
    constructor(){
        super()
        this.state = {
        task:"" ,
        id:'',
        completed: false
        }
        }
        handleSubmit = event => {
            event.preventDefault()
        }
handleInputChange = event => {
    console.log(event.target.name)
    console.log(event.target.value)
       this.setState({
           ...this.state,
           task: event.target.value
       })

};
        render() {
            const {task} = this.state
            return(
<div>
   <form onSubmit={this.handleSubmit}>
       <p>Todo: {task}</p>
        <input
        type="text"
        name="task"
        placeholder='todo'
        onChange={this.handleInputChange}
        />
    <button onClick={this.clickHandler}> Add</button>
    </form>
</div>
  );
}};


export default TodoForm;