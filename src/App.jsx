import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'


function App() {

  const [todos, setTodos] = useState([
    {
      "id": 1,
      "text": "Reunião com equipe de desenvolvimento",
      "category": "Trabalho",
      "iscompleted": false
    },
    {
      "id": 2,
      "text": "Estudar para o exame de matemática",
      "category": "Estudo",
      "iscompleted": true
    },
    {
      "id": 3,
      "text": "Fazer compras no supermercado",
      "category": "Casa",
      "iscompleted": false
    },
    {
      "id": 4,
      "text": "Fazer exercícios por 30 minutos",
      "category": "Saúde",
      "iscompleted": true
    }
  ]);

  const addTodo = (text, category) =>{
    const newTodos = [
      ...todos,
      {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      iscompleted: false,
    },
  ];
  setTodos(newTodos);
  };

  return (
    <div className="app"> 
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo)=> (
          <Todo key={todo.id} todo ={todo}/>
          
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
