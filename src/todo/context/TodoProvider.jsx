/* eslint-disable react/prop-types */
import { useReducer } from 'react'
import {v4 as uuid }from 'uuid'
import { todoReducer } from './todoReducer'
import { TodoContext } from './TodoContext'


const initialState =  [
  { id: uuid(),
    name: 'React Project',
    description: 'TODO DESC TEST',
    state: false
  },
  { id: uuid(),
    name: 'Angular Project',
    description: 'TODO DESC TEST',
    state: false
  }
]



const TodoProvider = ({children}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const createTodo = (data) => { 
    const action = {
      type: '[TODO] create',
      payload: {...data, id: uuid()}
    }
    dispatch(action)
  }

  
  const deleteTodo = (id) => { 
    const action = {
      type: '[TODO] delete',
      payload: { id}
    }
    dispatch(action)
  }

  const updateState = (id) => { 
    const action = {
      type: '[TODO] update state',
      payload: { id}
    }
    dispatch(action)
  }

  const value  ={
    state,
    createTodo,
    deleteTodo,
    updateState
  }

  return (
    <TodoContext.Provider value={value} >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider