import React from 'react';
import Todo from './Todo';

function Todos({ todos, updateTodo, deleteTodo }) {
	const renderedTodos = todos.map((todo, index) => {
		return (
			<div key={index}>
				<Todo todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
			</div>
		);
	});
	return (
		<div>
			{renderedTodos}
			<p>
				You got{' '}
				{
					todos.filter(todo => {
						if (!todo.isComplete) return todo;
					}).length
				}{' '}
				to-do
			</p>
		</div>
	);
}

export default Todos;
