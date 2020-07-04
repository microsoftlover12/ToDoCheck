import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Todo = () => {

  const [todo, setTodo] = useState([
    { id: 1, content: 'drinking coffee' },
    { id: 2, content: 'go to the shop' }

  ])
  const [inputState, setInputState] = useState('')




  return (
    <>
      <ul>
        {todo.map(item => {

          return (





            deleteitem(id){
             
              const filtered= todo.filter(item =>
                item.id!==id);
            <>

              <li>{item.content}</li>
              <button onClick={() => {
                setTodo([...todo, { id: todo.length, content: '' }])
                setInputState('')
              }}>delete</button>
            </>

            }
          )
        
        }


        )}
      </ul>
      <input type="text" onChange={(e) => { setInputState(e.target.value) }} value={inputState} />
      <button onClick={() => {
        setTodo([...todo, { id: todo.length, content: inputState }])
        setInputState('')
      }}>add</button>



    </>
  )


}







export default Todo;








