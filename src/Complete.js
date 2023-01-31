import React from 'react'

export default function Complete({complete,restoreTodo}) {
    function handleChange(){
        restoreTodo(complete)
      }
  return (
    <>
      <div className='col complete-item'>
        <input  type="checkbox" defaultChecked={complete.complete} onChange={handleChange}/>
        {complete.name}
    </div>
    </>
  )
}
