import React, {Component} from 'react'
import {addRecipe} from '../api/recipes'
import StepForm from './stepForm.js'




class RecipeForm extends Component {
  constructor(props){
    super()
    
    this.state = {
          "name":"",
          "by":"",
          "steps":[
            {
              "directions":""
            }
          ]
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
  
  saveRecipe = (e) => {
    addRecipe(this.state)
    this.setState({
          "name":"",
          "by":"",
           "steps":[
            {
              "directions":""
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
           
            <button onClick={this.addStep}>Add Step</button>
            <button onClick={this.saveRecipe}>Save this </button>
      		

    </div>
    )
  }
}

export default RecipeForm
