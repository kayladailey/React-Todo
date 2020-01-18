import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

class App extends React.Component {
	state = {
		todos: []
	};

	handleSubmit = (e, newTask) => {
		e.preventDefault();

		let todoCard = {
			task: newTask,
			id: Date.now(),
			completed: false
		};

		const newTodoList = [ ...this.state.todos, todoCard ];
		this.setState({
			todos: newTodoList
		});
	};

	toggleCompleted = (id) => {
		const toDoById = this.state.todos.map((todo) => {
			return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
		});

		this.setState({
			todos: toDoById
		});
	};

	clearCompleted = () => {
		const completed = this.state.todos.filter((todo) => {
			return todo.completed === false;
		});

		this.setState({
			todos: completed
		});
	};

	render() {
		if (!this.state.todos) return <h1>loading to dos... </h1>;

		return (
			<div>
				<h2>Mommy Madness!</h2>

				<TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} />

				<TodoForm handleSubmit={this.handleSubmit} clearCompleted={this.clearCompleted} />
			</div>
		);
	}
}

export default App;
