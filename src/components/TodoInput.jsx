import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';

function TodoInput({ createTodo }) {
	const [newTodo, setNewTodo] = useState('');
	const handleChange = e => {
		setNewTodo(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
		createTodo(newTodo);
		setNewTodo('');
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className='input'>
				<input type='text' onChange={handleChange} value={newTodo} />
				<button>
					<BsPlusCircleFill className='button' />
				</button>
			</form>
		</div>
	);
}

export default TodoInput;
