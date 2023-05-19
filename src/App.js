import { useEffect, useState } from 'react';
import TodoInput from './components/TodoInput';
import Todos from './components/Todos';
import {
	collection,
	doc,
	onSnapshot,
	query,
	updateDoc,
	addDoc,
	deleteDoc,
} from 'firebase/firestore';
import { db } from './firebase';

function App() {
	const [todos, setTodos] = useState([]);
	const createTodo = async name => {
		await addDoc(collection(db, 'todos'), {
			name,
			isComplete: false,
		});
	};
	const readTodo = () => {
		const q = query(collection(db, 'todos'));
		const unsubscribe = onSnapshot(q, todos => {
			let todosArr = [];
			todos.forEach(item => {
				todosArr.push({ ...item.data(), id: item.id });
			});
			setTodos(todosArr);
		});
		return unsubscribe;
	};
	const updateTodo = async todo => {
		await updateDoc(doc(db, 'todos', todo.id), {
			isComplete: !todo.isComplete,
		});
	};
	const deleteTodo = async todo => {
		await deleteDoc(doc(db, 'todos', todo.id));
	};

	useEffect(() => {
		readTodo();
	}, []);
	return (
		<div className='App container'>
			<section>
				<h2>An Overengineered To-do App</h2>
				<TodoInput createTodo={createTodo} />
				<Todos todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
			</section>
		</div>
	);
}

export default App;
