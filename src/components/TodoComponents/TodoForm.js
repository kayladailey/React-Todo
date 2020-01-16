import  React  from 'react';

class TodoForm extends React.Component {


        render() {
            return(
<div>
<h2> New Task </h2>
    <form>
    
        <input
        type="text"
        name="task"
        placeholder='title'
        />
        <input
        type="checkbox"
        name="completed"
        placeholder='status'
        />
        <button> Add</button>
    </form>
</div>
  );
}};


export default TodoForm;