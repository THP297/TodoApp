import React ,{useRef} from 'react'
import click from './click.mp3'

export default function Todo({todo,toggleTodo}) {
  function handleChange(){
    const audio =  new Audio(click)
    audio.play()
    toggleTodo(todo.id)
  }
  return (
    <>
    <div className='col todo-item'>
        <div className='d-flex justify-content-center'>
        <input  type="checkbox" defaultChecked={todo.complete} onChange={handleChange}/>
        {todo.name}
        </div>
    </div>
    </>
  ) 
}
