import React, {Component} from 'react'
import {addRecipe} from '../api/recipes'
import StepForm from './stepForm.js'
import IngredientForm from './ingredientForm.js'




class RecipeForm extends Component {
  constructor(props){
    super()
    
    this.state = {
          "name":"",
          "by":"",
          "steps":[
            {
              "directions":"",
            }
          ],
          "ingredients":[
            {
              "item":[
              {"amount":"",
              "unit":"",
              "what":""}]

            }]
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  updateStep=(index, directions)=>{
    this.setState({
      steps:this.state.steps.map((step,i)=>{
        if (i === index){
          return{directions}
        }else{
          return step
        }
      })
    })
  }

  addStep = (e) => {
    this.setState({
      steps:[...this.state.steps, {"directions":""}]
    })
  }




  updateIngredient=(index, items)=>{
    this.setState({
      ingredients:this.state.ingredients.map((ingredient,i)=>{
        if (i === index){
          return{items}
        }else{
          return ingredient
        }
      })
    })
  }


  addIngredient = (e) => {
    this.setState({
      ingredients:[...this.state.ingredients, {"items":[] }]
    })
  }

  
  saveRecipe = (e) => {
    addRecipe(this.state)
    this.setState({
          "name":"",
          "by":"",
           "steps":[
            {
              "directions":"",
            }
          ],
          "ingredients":[
            {
              "items":[
                {"amount":"",
              "unit":"",
              "what":""}]

            }
          ]
         
    })
   }
  
  
  render(){
   
    return(
    <div>
          	
      			<input placeholder="recipe name" type="text" name="name" onChange={this.handleChange} value={this.state.name}></input>

            <input placeholder="by" type="text" name="by" onChange={this.handleChange} value={this.state.by}></input>

				
            {this.state.steps.map((step,i)=>(
                <StepForm key={"StepForm" + i} index={i} updateStep={this.updateStep} />
            ))}
            {this.state.ingredients.map((ingredient,i)=>(
                <IngredientForm key={"IngredientForm"+i} index={i} updateIngredient={this.updateIngredient}/>
            ))}
           
            <button onClick={this.addStep}>Add Step</button>
            <button onClick={this.addIngredient}>Add Ingredient</button>
            <button onClick={this.saveRecipe}>Save this </button>
      		

    </div>
    )
  }
}

export default RecipeForm
