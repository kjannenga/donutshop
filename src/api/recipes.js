import store from '../store'
import axios from 'axios'


export function addRecipe(recipe) {
  const recipeData = {
    "name":recipe.name,
    "by":recipe.by

  }

 
  axios.post('http://localhost:3001/recipes', recipeData).then(resp=>{
   const id = resp.data.id
   var postFunctions = []

   recipe.steps.forEach(step=>{
     const stepData = {
       recipeId:id,
      ...step
     }
     
     postFunctions.push(function(){
       return axios.post('http://localhost:3001/steps',stepData).then(resp =>{
          console.log(resp)
     })
     }())
    
   })

   recipe.ingredients.forEach(ingredient=>{
     const ingredientData = {
       recipeId:id,
       
      ...ingredient
     }
     
     postFunctions.push(function(){
       return axios.post('http://localhost:3001/ingredients',ingredientData).then(resp =>{
          console.log(resp)
     })
     }())
    
   })

   axios.all(postFunctions).then(function(){
     console.log("all requests are finished")
   })

  })
}
