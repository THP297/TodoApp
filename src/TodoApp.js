import TodoList from './TodoList';
import React, { useState, useRef, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import './css/styles.css'
import './css/bootstrap.min.css'
import CompleteList from './CompleteList';

const LOCAL_TODO_KEY = 'todo'
const LOCAL_COMPLETE_KEY = 'complete'

function TodoApp() {
  const [todos, setTodo] = useState([])
  const [completed_todos, setrmTodo] = useState([])
  const TodonameRef = useRef()

  useEffect(() => {
    const storedTodo = JSON.parse(localStorage.getItem(LOCAL_TODO_KEY))
    if (storedTodo) setTodo(storedTodo)
    const storedComplete= JSON.parse(localStorage.getItem(LOCAL_COMPLETE_KEY))
    if (storedComplete) setrmTodo(storedComplete)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_TODO_KEY, JSON.stringify(todos))
    localStorage.setItem(LOCAL_COMPLETE_KEY, JSON.stringify(completed_todos))

  }, [todos])

  function restoreTodo(restoreTodo){
    setTodo(prevTodos => {
      return [...prevTodos, restoreTodo]
    })
    const newCompleteTodo = [...completed_todos]
    const todo = newCompleteTodo.find(todo => todo.id === restoreTodo.id)
    todo.complete = !todo.complete
    setrmTodo(newCompleteTodo.filter(todo => todo.complete))
  }
  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodo(newTodos.filter(todo => !todo.complete))
    setrmTodo(prevCompletes => {
      return [...prevCompletes, todo]
    })
  }


  function handleClearAll() {
    const newTodos = []
    setTodo(newTodos)
  }

  function handleAddTodo() {
    const name = TodonameRef.current.value
    if (name === '') return
    setTodo(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })
    TodonameRef.current.value = null
  }
  return (
    <>
      <div className="d-flex flex-column todo-app-container">
        <div className='d-flex justify-content-center todo-container'>
          <div className='col col-xl-6 col-lg-8 col-md-9 col-sm-12 todo-app'>
            <div className="d-flex justify-content-center header">
              <h1>Todo App</h1>
            </div>
            <div className='row todo-list-item'>
              <TodoList todos={todos} toggleTodo={toggleTodo} />
            </div>
            <div className="add-todo">
              <input ref={TodonameRef} type="input" placeholder="Add a new todo" className='todo-input'></input>
              <button onClick={handleAddTodo} className="todo-button">Add todo</button>
            </div>
            <div className="clear-all mt-3">
              <button className="todo-button" onClick={handleClearAll}>Clear All</button>
            </div>
            <div className="todo-count">
              <p>{todos.filter(todo => !todo.complete).length} left todo</p>
            </div>
          </div>
        </div>
        <h4 className='d-flex justify-content-center'>COMPLETED TASK</h4>
        <div className='d-flex justify-content-center complete-container'>
          <div className='col col-xl-6 col-lg-8 col-md-9 col-sm-12 complete-list-item'>
            <CompleteList completes={completed_todos} restoreTodo={restoreTodo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoApp;
