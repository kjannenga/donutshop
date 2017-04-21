import React, {Component} from 'react'
import {Route, Link} from 'react-router-dom'
import RecipeForm from './recipeForm'



class App extends Component{
  constructor(props){
    super()
  }

  render(){
    return(
      
        <div>

        <Link to="/addRecipe">Add Recipe</Link><br/>
        <Route path="/addRecipe" component={RecipeForm}/>

        </div>
     
    )

  }
}

export default App