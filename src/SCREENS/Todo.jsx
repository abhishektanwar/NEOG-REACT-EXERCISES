import React, { useState } from 'react'

const Todo = () => {
	const [todoInput,setTodoInput] = useState('');
	const [todoList,setTodoList] = useState([]);
	const handleListItemClick = (i) => {
		const newTodoList = todoList.map((item,index)=>
			i=== index ? {...item,completed:!item.completed} : item
		)
		setTodoList(newTodoList);
	}

	const handleTodoFormSubmit = (e) => {
		e.preventDefault();
		setTodoList([...todoList,{value:todoInput,completed:false}]);
		setTodoInput('');
	}

	return (
		<div>
			<form action="" onSubmit={handleTodoFormSubmit}>
				<input type="text" value={todoInput} onChange={(e)=>setTodoInput(e.target.value)} />
				<button type="submit">Add Todo</button>
			</form>
			<ol>
				{todoList&& todoList.map((item,index)=>{
					return (<li onClick={()=>{handleListItemClick(index)}} style={item.completed ? {textDecoration:'line-through'}:null} key={item.index}>{item.value}</li>)
				})}
			</ol>
		</div>
	)
}

export default Todo
