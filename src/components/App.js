import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import RecipeForm from './recipeForm'
import Home from './home'
import './css/styles.css'




class App extends Component{
  constructor(props){
    super()
  }

  render(){
    return(
      
        <div>
        <header className="topbar">
          <ul className="toplist">
            <li>the kitchen is yours, chef!</li>
            <li> BATCH MAKER </li>
            <li> + @ & </li>
          </ul>
        </header>

        <nav className="sidebar">
          <ul className="sidelist">
            <li><a href="/">Home-My Recipes</a></li>
            <li><a href="/public">Public Recipes</a></li>
            <li><a href="/popular">Popular Recipes</a></li>
            <li><a href="/favorite">My Favorite Recipes</a></li>
            <li><a href="/pantry">My Pantry</a></li>
            <li><a href="/addRecipe">Add Recipe</a></li>
            </ul>
        </nav>

        <div className="pages">
		      <Route exact={true} path="/" component={Home} />
		      
		      <Route path="/addRecipe/" component={RecipeForm} />
			</div>

    

        </div>
     
    )

  }
}

export default App