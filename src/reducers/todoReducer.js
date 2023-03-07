function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO': {
      return {
        ...state,
        todoList: [...state.todoList, {
          id: crypto.randomUUID(),
          done: false,
          edit: false,
          selected: false,
          content: action.content
        }]
      }

    }
    case 'SELECT_TODO': {
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.id ? {...todo, selected: true} : { ...todo, selected: false})
      }

    }
    case 'DELETE_TODO': {
      return {
        ...state,
        todoList: state.todoList.filter(todo => todo.id !== action.id)
      }

    }
    case 'TOGGLE_TODO': {
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.id ? {...todo, done: !todo.done} : todo )
      }

    }
    case 'TOGGLE_TODO_EDIT': {
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.id ? {...todo, edit: !todo.edit} : todo )
      }
    }
    case 'EDIT_TODO': {
      return {
        ...state,
        todoList: state.todoList.map(todo => todo.id === action.id ? {...todo, content: action.content, edit: false} : todo, )
      }
    }
    case 'SET_THEME': {
      return {
        ...state,
        theme: action.theme
      }
    }
    default: {
      throw new Error("Action inconnu")
    }

  }
}

export default todoReducer;
