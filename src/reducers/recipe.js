const initialState = {
  recipes: []
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'ADD_RECIPIE':
      return {...state, recipes:[...state.recipes, state.recipe]}
    default:
      return state
  }
}