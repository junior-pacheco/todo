export const todoReducer = (state, action) => {


  switch (action.type) {
  case '[TODO] create':
      
    return [...state, action.payload]

  case '[TODO] delete':
      
    return state.filter(todo => todo.id !== action.payload.id)

  case '[TODO] update state':
    return state.map(todo =>
      todo.id === action.payload.id ? { ...todo, state: !todo.state } : todo
    );
  default:
    return state
  }

}