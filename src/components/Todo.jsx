import React, { useState } from 'react';
import { BsTrashFill } from 'react-icons/bs';

function Todo({ todo, updateTodo, deleteTodo }) {
	const [isComplete, setIsComplete] = useState(todo.isComplete);
	const handleChange = () => {
		updateTodo(todo);
		setIsComplete(!isComplete);
	};
	const handleDelete = () => {
		deleteTodo(todo);
	};
	return (
		<div className='todo-card'>
			<div className='todo-card-left'>
				<input
					type='checkbox'
					checked={isComplete}
					onChange={handleChange}
					className='checkbox'
				/>
				{todo.name}
			</div>
			<div className='todo-card-right'>
				<BsTrashFill onClick={handleDelete} />
			</div>
		</div>
	);
}

export default Todo;
