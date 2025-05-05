import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, removeTodo } from './todosSlice';
import ButtonUI from '../../ui-components/ButtonUI';

export default function Todos() {
    const [input, setInput] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    console.log("Todos: ",todos)

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    const handleToggle = (id) => {
        dispatch(toggleTodo(id));
    };

    const handleRemove = (id) => {
        dispatch(removeTodo(id));
    };

    return (
        <div>
            <h2>Todos</h2>
            <input
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Scrivi un todo"
            />
            <ButtonUI
                textProp={"Aggiungi"}
                onClick={handleAdd}
            />

            <ul>
                {todos.map(todo => (
                    
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <span onClick={() => handleToggle(todo.id)}>
                            {todo.text}
                        </span>
                        <ButtonUI
                            textProp={"Rimuovi"}
                            onClick={() => handleRemove(todo.id)} 
                        />
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}
