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


  return (
    <div className="app"> 
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo)=> (
          <Todo todo ={todo}/>
          
        ))}
      </div>
      <TodoForm/>
    </div>
  )
}

export default App
